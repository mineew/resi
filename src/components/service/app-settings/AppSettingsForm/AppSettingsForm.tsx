/* eslint-disable @typescript-eslint/no-misused-promises */

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

  const { control, watch, formState, handleSubmit } =
    useFormContext<Settings>();

  const meanOptions: RadioGroupItem[] = [
    { label: t('COMMON.MEAN_VALUE'), value: 'mean' },
    { label: t('COMMON.MEDIAN'), value: 'median' },
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
        control={control}
        name="zScoreThreshold"
        render={({ field }) => (
          <Slider
            label={t('APP_SETTINGS.Z_SCORE_THRESHOLD')}
            hasBoldLabel
            value={field.value || DEFAULT_SETTINGS.zScoreThreshold}
            onValueChange={field.onChange}
            valueFormatter={(value) => t('UTILS.NUMBER', { value }) + ' SD'}
            min={1}
          />
        )}
      />

      <Controller
        control={control}
        name="zScoreMeanMethod"
        render={({ field }) => (
          <RadioGroup
            label={t('APP_SETTINGS.Z_SCORE_CENTRAL_TENDENCY')}
            items={meanOptions}
            value={field.value || DEFAULT_SETTINGS.zScoreMeanMethod}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="chunkSize"
        render={({ field }) => (
          <Slider
            label={t('APP_SETTINGS.CHUNK_SIZE')}
            hasBoldLabel
            value={field.value || DEFAULT_SETTINGS.chunkSize}
            onValueChange={(value) => {
              if (value !== 1 && value !== 3000) {
                field.onChange(value - 1);
              } else {
                field.onChange(value);
              }
            }}
            valueFormatter={(value) => {
              if (value === 1) {
                return t('COMMON.MM', { value: 0 });
              }

              return t('COMMON.MM', { value: value / 100 });
            }}
            min={1}
            max={3000}
            step={100}
          />
        )}
      />

      <Controller
        control={control}
        name="chunkAggregateMethod"
        render={({ field }) => (
          <RadioGroup
            label={t('APP_SETTINGS.CHUNK_CENTRAL_TENDENCY')}
            items={meanOptions}
            value={field.value || DEFAULT_SETTINGS.chunkAggregateMethod}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="renderChunksOnChart"
        render={({ field }) => (
          <Checkbox
            label={t('APP_SETTINGS.CHUNK_SIZE_RENDER')}
            hasBoldLabel
            checked={field.value ?? DEFAULT_SETTINGS.renderChunksOnChart}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="differenceMeanMethod"
        render={({ field }) => (
          <RadioGroup
            label={t('APP_SETTINGS.DIFF_CENTRAL_TENDENCY')}
            items={meanOptions}
            value={field.value || DEFAULT_SETTINGS.differenceMeanMethod}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="takeNegativeDiffs"
        render={({ field }) => (
          <Checkbox
            label={t('APP_SETTINGS.DIFF_TAKE_NEGATIVE')}
            hasBoldLabel
            checked={field.value ?? DEFAULT_SETTINGS.takeNegativeDiffs}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="growthMeanMethod"
        render={({ field }) => (
          <RadioGroup
            label={t('APP_SETTINGS.GROWTH_CENTRAL_TENDENCY')}
            items={meanOptions}
            value={field.value || DEFAULT_SETTINGS.growthMeanMethod}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="takeNegativeGrowth"
        render={({ field }) => (
          <Checkbox
            label={t('APP_SETTINGS.GROWTH_TAKE_NEGATIVE')}
            hasBoldLabel
            checked={field.value ?? DEFAULT_SETTINGS.takeNegativeGrowth}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="offsetLeft"
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
          },
        }}
        render={({ field }) => (
          <InputNumber
            label={t('APP_SETTINGS.OFFSET_LEFT')}
            typedValue={field.value}
            onValueChange={field.onChange}
            invalid={!!formState.errors.offsetLeft}
            help={formState.errors.offsetLeft?.message}
            rightElement={t('COMMON.MM')}
          />
        )}
      />

      <Controller
        control={control}
        name="offsetRight"
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
          },
        }}
        render={({ field }) => (
          <InputNumber
            label={t('APP_SETTINGS.OFFSET_RIGHT')}
            typedValue={field.value}
            onValueChange={field.onChange}
            invalid={!!formState.errors.offsetRight}
            help={formState.errors.offsetRight?.message}
            rightElement={t('COMMON.MM')}
          />
        )}
      />
    </form>
  );
});

AppSettingsForm.displayName = 'AppSettingsForm';

export default AppSettingsForm;
