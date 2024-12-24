import { memo, useCallback, useState, type JSX } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import AppSettingsForm from '@/components/service/app-settings/AppSettingsForm/AppSettingsForm';
import Button from '@/components/ui/Button/Button';
import Dialog from '@/components/ui/Dialog/Dialog';
import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';
import appPackage from '~/package.json';

import styles from './AppSettings.module.css';

interface AppSettingsProps {
  children: JSX.Element;
  onChange: (values: Settings) => void;
  values?: Settings;
}

const AppSettings = memo((props: AppSettingsProps) => {
  const { children, onChange, values = {} } = props;
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);

  const methods = useForm<Settings>({
    mode: 'onChange',
    values: { ...DEFAULT_SETTINGS, ...values },
  });

  const { reset } = methods;

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setDialogOpen(open);
      reset();
    },
    [reset],
  );

  const handleSubmit = useCallback(
    (newValues: Settings) => {
      setDialogOpen(false);
      onChange(newValues);
    },
    [onChange],
  );

  return (
    <FormProvider {...methods}>
      <Dialog
        size="400"
        scrollable
        open={dialogOpen}
        trigger={children}
        title={t('APP_SETTINGS.TITLE')}
        onOpenChange={handleOpenChange}
        tooltip={t('APP_SETTINGS.TOOLTIP')}
        footer={
          <div className={styles.footer}>
            <Button
              type="submit"
              form="app-settings-form"
              disabled={!methods.formState.isValid}
            >
              {t('APP_SETTINGS.SUBMIT_BUTTON')}
            </Button>

            <div className={styles['app-version']}>
              {t('APP_SETTINGS.VERSION')} {appPackage.version}
            </div>
          </div>
        }
      >
        <AppSettingsForm onSubmit={handleSubmit} />
      </Dialog>
    </FormProvider>
  );
});

AppSettings.displayName = 'AppSettings';

export default AppSettings;
