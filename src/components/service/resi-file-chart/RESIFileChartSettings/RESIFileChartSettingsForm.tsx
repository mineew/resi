/* eslint-disable @typescript-eslint/no-misused-promises */

import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button/Button';
import RadioGroup, {
  type RadioGroupItem,
} from '@/components/ui/RadioGroup/RadioGroup';
import Slider from '@/components/ui/Slider/Slider';
import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';

import styles from './RESIFileChartSettings.module.css';

interface RESIFileChartSettingsFormProps {
  defaultValues?: Settings;
  onSubmit: (values: Settings) => void;
}

function RESIFileChartSettingsForm(props: RESIFileChartSettingsFormProps) {
  const { defaultValues, onSubmit } = props;

  const { control, handleSubmit } = useForm<Settings>({
    defaultValues: { ...DEFAULT_SETTINGS, ...defaultValues },
  });

  const meanOptions: RadioGroupItem[] = [
    { label: 'Среднее значение', value: 'mean' },
    { label: 'Медиана', value: 'median' },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="zScoreThreshold"
        render={({ field }) => (
          <Slider
            label="Порог Z-Score"
            hasBoldLabel
            value={field.value || DEFAULT_SETTINGS.zScoreThreshold}
            onValueChange={field.onChange}
            valueFormatter={(value) => `${value} SD`}
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
            label="Окно сглаживания"
            hasBoldLabel
            value={field.value || DEFAULT_SETTINGS.chunkSize}
            onValueChange={(value) => {
              if (value !== 1 && value !== 1000) {
                field.onChange(value - 1);
              } else {
                field.onChange(value);
              }
            }}
            valueFormatter={(value) => {
              if (value === 1) {
                return '0 мм';
              }

              return `${value / 100} мм`;
            }}
            min={1}
            max={1000}
            step={100}
          />
        )}
      />

      <Controller
        control={control}
        name="chunkAggregateMethod"
        render={({ field }) => (
          <RadioGroup
            label="Мера среднего в расчетах сглаживания"
            items={meanOptions}
            value={field.value || DEFAULT_SETTINGS.chunkAggregateMethod}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="differenceMeanMethod"
        render={({ field }) => (
          <RadioGroup
            label="Мера среднего в расчетах разницы"
            items={meanOptions}
            value={field.value || DEFAULT_SETTINGS.differenceMeanMethod}
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
