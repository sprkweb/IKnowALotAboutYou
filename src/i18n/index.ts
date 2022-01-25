import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from '@/i18n/en'
import ru from '@/i18n/ru'

addMessages('en', en);
addMessages('ru', ru);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
