/* eslint-disable @typescript-eslint/no-misused-promises */

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button/Button';
import Dialog from '@/components/ui/Dialog/Dialog';
import RadioGroup from '@/components/ui/RadioGroup/RadioGroup';
import Slider from '@/components/ui/Slider/Slider';
import { type SmoothDataOptions } from '@/utils/stats/smoothData';

import styles from './RESIFileChartSettings.module.css';

interface RESIFileChartSettingsProps {
  values?: SmoothDataOptions;
  onChange: (values: SmoothDataOptions) => void;
  children: JSX.Element;
}

const DEFAULT_VALUES: Required<SmoothDataOptions> = {
  zScoreThreshold: 3,
  zScoreMeanMethod: 'mean',
  chunkSize: 250,
  chunkAggregateMethod: 'mean',
};

function RESIFileChartSettings(props: RESIFileChartSettingsProps) {
  const { values = {}, onChange, children } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const { control, handleSubmit } = useForm<SmoothDataOptions>({
    defaultValues: { ...DEFAULT_VALUES, ...values },
  });

  const handleChange = (values: SmoothDataOptions) => {
    setDialogOpen(false);
    onChange(values);
  };

  return (
    <Dialog
      trigger={children}
      open={dialogOpen}
      onOpenChange={setDialogOpen}
      title="Настройки графика"
      size="400"
    >
      <form className={styles.form} onSubmit={handleSubmit(handleChange)}>
        <Controller
          control={control}
          name="zScoreThreshold"
          render={({ field }) => (
            <Slider
              label="Порог Z-Score"
              hasBoldLabel
              value={field.value || DEFAULT_VALUES.zScoreThreshold}
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
              value={field.value || DEFAULT_VALUES.zScoreMeanMethod}
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
              value={field.value || DEFAULT_VALUES.chunkSize}
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
              value={field.value || DEFAULT_VALUES.chunkAggregateMethod}
              onValueChange={field.onChange}
            />
          )}
        />

        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </Dialog>
  );
}

export default RESIFileChartSettings;
