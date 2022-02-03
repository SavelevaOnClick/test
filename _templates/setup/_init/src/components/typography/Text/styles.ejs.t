---
to: src/components/typography/Text/styles.ts
unless_exists: true
---
import {makeStyles} from '@services';

export const useStyles = makeStyles(theme => ({
  defaultText: {
    color: theme.text,
  },
}));
