/* eslint-disable @typescript-eslint/no-misused-promises */

import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button/Button';
import RadioGroup from '@/components/ui/RadioGroup/RadioGroup';
import Slider from '@/components/ui/Slider/Slider';
import {
  DEFAULT_SMOOTH_DATA_OPTIONS,
  type SmoothDataOptions,
} from '@/store/types/SmoothDataOptions';

import styles from './RESIFileChartSettings.module.css';

interface RESIFileChartSettingsFormProps {
  defaultValues?: SmoothDataOptions;
  onSubmit: (values: SmoothDataOptions) => void;
}

function RESIFileChartSettingsForm(props: RESIFileChartSettingsFormProps) {
  const { defaultValues, onSubmit } = props;

  const { control, handleSubmit } = useForm<SmoothDataOptions>({
    defaultValues: { ...DEFAULT_SMOOTH_DATA_OPTIONS, ...defaultValues },
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="zScoreThreshold"
        render={({ field }) => (
          <Slider
            label="Порог Z-Score"
            hasBoldLabel
            value={field.value || DEFAULT_SMOOTH_DATA_OPTIONS.zScoreThreshold}
            onValueChange={field.onChange}
            min={1}
          />
        )}
      />

      <Controller
        control={control}
        name="zScoreMeanMethod"
        render={({ field }) => (
          <RadioGroup
            label="Мера среднего в расчетах Z-Score"
            items={[
              { label: 'Среднее значение', value: 'mean' },
              { label: 'Медиана', value: 'median' },
            ]}
            value={field.value || DEFAULT_SMOOTH_DATA_OPTIONS.zScoreMeanMethod}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="chunkSize"
        render={({ field }) => (
          <Slider
            label="Окно сглаживания"
            hasBoldLabel
            value={field.value || DEFAULT_SMOOTH_DATA_OPTIONS.chunkSize}
            onValueChange={(value) => {
              if (value !== 1 && value !== 1000) {
                field.onChange(value - 1);
              } else {
                field.onChange(value);
              }
            }}
            min={1}
            max={1000}
            step={50}
          />
        )}
      />

      <Controller
        control={control}
        name="chunkAggregateMethod"
        render={({ field }) => (
          <RadioGroup
            label="Мера среднего в расчетах сглаживания"
            items={[
              { label: 'Среднее значение', value: 'mean' },
              { label: 'Медиана', value: 'median' },
            ]}
            value={
              field.value || DEFAULT_SMOOTH_DATA_OPTIONS.chunkAggregateMethod
            }
            onValueChange={field.onChange}
          />
        )}
      />

      <div>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
}

export default RESIFileChartSettingsForm;
