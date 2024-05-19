import { Trash2 } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import useDebouncedState from '@/utils/hooks/useDebouncedState';

import styles from './RESIFileList.module.css';

interface RESIFileListItemToolbarProps {
  checked: boolean;
  onChangeChecked: (checked: boolean) => void;
  onDelete: () => void;
}

const RESIFileListItemToolbar = memo((props: RESIFileListItemToolbarProps) => {
  const { checked: defaultChecked, onChangeChecked, onDelete } = props;
  const { t } = useTranslation();

  const [checked, setChecked] = useDebouncedState(
    defaultChecked,
    onChangeChecked,
  );

  return (
    <div className={styles.toolbar}>
      <Checkbox
        label={t('RESI_FILE_LIST.ITEM_IS_ACTIVE')}
        checked={checked}
        onCheckedChange={setChecked}
        size="small"
      />

      <Button
        className={styles['delete-button']}
        theme="danger"
        size="small"
        outlined
        onClick={onDelete}
        tabIndex={-1}
      >
        <Trash2 />
        {t('RESI_FILE_LIST.DELETE_ITEM')}
      </Button>
    </div>
  );
});

RESIFileListItemToolbar.displayName = 'RESIFileListItemToolbar';

export default RESIFileListItemToolbar;
