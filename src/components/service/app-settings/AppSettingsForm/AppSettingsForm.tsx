/* eslint-disable @typescript-eslint/no-misused-promises */

import { memo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import InputNumber from '@/components/ui/InputNumber/InputNumber';
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

  const { control, watch, formState, handleSubmit } = useForm<Settings>({
    mode: 'onChange',
    defaultValues: { ...DEFAULT_SETTINGS, ...defaultValues },
  });

  const meanOptions: RadioGroupItem[] = [
    { label: 'Среднее значение', value: 'mean' },
    { label: 'Медиана', value: 'median' },
  ];

  const offsetLeft = watch('offsetLeft');
  const offsetRight = watch('offsetRight');
  const offsetGap = watch('offsetGap');

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
              if (value !== 1 && value !== 3000) {
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
            label="Мера среднего в расчетах сглаживания"
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
            label="Отобразить окно на графике"
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

      <Controller
        control={control}
        name="offsetLeft"
        rules={{
          validate: (value) => {
            if (!offsetRight || !offsetGap || !value) {
              return;
            }

            if (value > offsetRight - offsetGap) {
              return `Не более ${offsetRight - offsetGap} мм`;
            }
          },
        }}
        render={({ field }) => (
          <InputNumber
            label="Смещение слева"
            typedValue={field.value}
            onValueChange={field.onChange}
            invalid={!!formState.errors.offsetLeft}
            help={formState.errors.offsetLeft?.message}
            rightElement="мм"
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
              return `Не менее ${offsetLeft + offsetGap} мм`;
            }
          },
        }}
        render={({ field }) => (
          <InputNumber
            label="Смещение справа"
            typedValue={field.value}
            onValueChange={field.onChange}
            invalid={!!formState.errors.offsetRight}
            help={formState.errors.offsetRight?.message}
            rightElement="мм"
          />
        )}
      />

      <div>
        <Button type="submit" disabled={!formState.isValid}>
          Сохранить
        </Button>
      </div>
    </form>
  );
});

AppSettingsForm.displayName = 'AppSettingsForm';

export default AppSettingsForm;
