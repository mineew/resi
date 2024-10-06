/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-no-bind */

import { memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Checkbox from '@/components/ui/Checkbox/Checkbox';
import InputNumber from '@/components/ui/InputNumber/InputNumber';
import RadioGroup, {
  type RadioGroupItem,
} from '@/components/ui/RadioGroup/RadioGroup';
import Slider from '@/components/ui/Slider/Slider';
import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';

import styles from './AppSettingsForm.module.css';

interface AppSettingsFormProps {
  onSubmit: (values: Settings) => void;
}

const AppSettingsForm = memo((props: AppSettingsFormProps) => {
  const { onSubmit } = props;
  const { t } = useTranslation();

  const { watch, control, formState, handleSubmit } =
    useFormContext<Settings>();

  const meanOptions: RadioGroupItem[] = [
    { value: 'mean', label: t('COMMON.MEAN_VALUE') },
    { value: 'median', label: t('COMMON.MEDIAN') },
  ];

  const offsetLeft = watch('offsetLeft');
  const offsetRight = watch('offsetRight');
  const offsetGap = watch('offsetGap');

  return (
    <form
      id="app-settings-form"
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        render={({ field }) => (
          <Slider
            min={1}
            label={t('APP_SETTINGS.Z_SCORE_THRESHOLD')}
            value={field.value || DEFAULT_SETTINGS.zScoreThreshold}
            valueFormatter={(value) => t('UTILS.NUMBER', { value }) + ' SD'}
            onValueChange={field.onChange}
            hasBoldLabel
          />
        )}
        control={control}
        name="zScoreThreshold"
      />

      <Controller
        render={({ field }) => (
          <RadioGroup
            items={meanOptions}
            label={t('APP_SETTINGS.Z_SCORE_CENTRAL_TENDENCY')}
            value={field.value || DEFAULT_SETTINGS.zScoreMeanMethod}
            onValueChange={field.onChange}
          />
        )}
        control={control}
        name="zScoreMeanMethod"
      />

      <Controller
        render={({ field }) => (
          <Slider
            valueFormatter={(value) => {
              return t('COMMON.MM', { value: value / 100 });
            }}
            min={100}
            max={3000}
            step={100}
            label={t('APP_SETTINGS.CHUNK_SIZE')}
            value={field.value || DEFAULT_SETTINGS.chunkSize}
            onValueChange={field.onChange}
            hasBoldLabel
          />
        )}
        name="chunkSize"
        control={control}
      />

      <Controller
        render={({ field }) => (
          <RadioGroup
            items={meanOptions}
            label={t('APP_SETTINGS.CHUNK_CENTRAL_TENDENCY')}
            value={field.value || DEFAULT_SETTINGS.chunkAggregateMethod}
            onValueChange={field.onChange}
          />
        )}
        control={control}
        name="chunkAggregateMethod"
      />

      <Controller
        render={({ field }) => (
          <Checkbox
            label={t('APP_SETTINGS.CHUNK_SIZE_RENDER')}
            checked={field.value ?? DEFAULT_SETTINGS.renderChunksOnChart}
            onCheckedChange={field.onChange}
            hasBoldLabel
          />
        )}
        control={control}
        name="renderChunksOnChart"
      />

      <Controller
        render={({ field }) => (
          <RadioGroup
            items={meanOptions}
            label={t('APP_SETTINGS.DIFF_CENTRAL_TENDENCY')}
            value={field.value || DEFAULT_SETTINGS.differenceMeanMethod}
            onValueChange={field.onChange}
          />
        )}
        control={control}
        name="differenceMeanMethod"
      />

      <Controller
        render={({ field }) => (
          <Checkbox
            label={t('APP_SETTINGS.DIFF_TAKE_NEGATIVE')}
            checked={field.value ?? DEFAULT_SETTINGS.takeNegativeDiffs}
            onCheckedChange={field.onChange}
            hasBoldLabel
          />
        )}
        control={control}
        name="takeNegativeDiffs"
      />

      <Controller
        render={({ field }) => (
          <RadioGroup
            items={meanOptions}
            label={t('APP_SETTINGS.GROWTH_CENTRAL_TENDENCY')}
            value={field.value || DEFAULT_SETTINGS.growthMeanMethod}
            onValueChange={field.onChange}
          />
        )}
        control={control}
        name="growthMeanMethod"
      />

      <Controller
        render={({ field }) => (
          <Checkbox
            label={t('APP_SETTINGS.GROWTH_TAKE_NEGATIVE')}
            checked={field.value ?? DEFAULT_SETTINGS.takeNegativeGrowth}
            onCheckedChange={field.onChange}
            hasBoldLabel
          />
        )}
        control={control}
        name="takeNegativeGrowth"
      />

      <Controller
        render={({ field }) => (
          <InputNumber
            typedValue={field.value}
            rightElement={t('COMMON.MM')}
            label={t('APP_SETTINGS.OFFSET_LEFT')}
            invalid={!!formState.errors.offsetLeft}
            help={formState.errors.offsetLeft?.message}
            onValueChange={field.onChange}
          />
        )}
        rules={{
          validate: (value) => {
            if (!offsetRight || !offsetGap || !value) {
              return;
            }

            if (value > offsetRight - offsetGap) {
              return t('VALIDATION_ERRORS.MM_MAX', {
                value: offsetRight - offsetGap,
              });
            }

            return;
          },
        }}
        control={control}
        name="offsetLeft"
      />

      <Controller
        render={({ field }) => (
          <InputNumber
            typedValue={field.value}
            rightElement={t('COMMON.MM')}
            label={t('APP_SETTINGS.OFFSET_RIGHT')}
            invalid={!!formState.errors.offsetRight}
            help={formState.errors.offsetRight?.message}
            onValueChange={field.onChange}
          />
        )}
        rules={{
          validate: (value) => {
            if (!offsetLeft || !offsetGap || !value) {
              return;
            }

            if (value < offsetLeft + offsetGap) {
              return t('VALIDATION_ERRORS.MM_MIN', {
                value: offsetLeft + offsetGap,
              });
            }

            return;
          },
        }}
        control={control}
        name="offsetRight"
      />
    </form>
  );
});

AppSettingsForm.displayName = 'AppSettingsForm';

export default AppSettingsForm;
