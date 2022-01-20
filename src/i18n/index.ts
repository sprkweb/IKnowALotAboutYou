import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './en.json';
import ru from './ru.json';

addMessages('en', en);
addMessages('ru', ru);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
