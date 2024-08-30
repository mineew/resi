import { memo, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import AppSettingsForm from '@/components/service/app-settings/AppSettingsForm/AppSettingsForm';
import Button from '@/components/ui/Button/Button';
import Dialog from '@/components/ui/Dialog/Dialog';
import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';
import appPackage from '~/package.json';

import styles from './AppSettings.module.css';

interface AppSettingsProps {
  values?: Settings;
  onChange: (values: Settings) => void;
  children: JSX.Element;
}

const AppSettings = memo((props: AppSettingsProps) => {
  const { values = {}, onChange, children } = props;
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);

  const methods = useForm<Settings>({
    mode: 'onChange',
    values: { ...DEFAULT_SETTINGS, ...values },
  });

  const reset = methods.reset;

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setDialogOpen(open);
      reset();
    },
    [reset],
  );

  const handleSubmit = useCallback(
    (values: Settings) => {
      setDialogOpen(false);
      onChange(values);
    },
    [onChange],
  );

  return (
    <FormProvider {...methods}>
      <Dialog
        title={t('APP_SETTINGS.TITLE')}
        tooltip={t('APP_SETTINGS.TOOLTIP')}
        size="400"
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
        open={dialogOpen}
        onOpenChange={handleOpenChange}
        trigger={children}
        scrollable
      >
        <AppSettingsForm onSubmit={handleSubmit} />
      </Dialog>
    </FormProvider>
  );
});

AppSettings.displayName = 'AppSettings';

export default AppSettings;
