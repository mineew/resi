/* eslint-disable @typescript-eslint/no-misused-promises */

import { memo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import RadioGroup, {
  type RadioGroupItem,
} from '@/components/ui/RadioGroup/RadioGroup';
import Slider from '@/components/ui/Slider/Slider';
import { DEFAULT_SETTINGS, type Settings } from '@/store/types/Settings';

import styles from './AppSettingsForm.module.css';

interface AppSettingsFormProps {
  defaultValues?: Settings;
  onSubmit: (values: Settings) => void;
}

const AppSettingsForm = memo((props: AppSettingsFormProps) => {
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
            label="Мера среднего в расчетах разности"
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
            label="Учитывать отрицательные разности"
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
            label="Мера среднего в расчетах роста"
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
            label="Учитывать отрицательный рост (спад)"
            hasBoldLabel
            checked={field.value ?? DEFAULT_SETTINGS.takeNegativeGrowth}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <div>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
});

AppSettingsForm.displayName = 'AppSettingsForm';

export default AppSettingsForm;
