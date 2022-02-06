---
to: src/components/typography/TextInput/styles.ts
unless_exists: true
---
import {makeStyles} from '@services';

export const useStyles = makeStyles(theme => ({
  defaultText: {
    padding: 0,
    color: theme.text,
  },
}));
