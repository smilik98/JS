# Адаптивная вёрстка, BEM и PostCSS

## Перед выполнением:
- Установить `nvm`
- С помошью `nvm` установить `node.js` последней версии
- Cкопировать содержимое папки `../starter` к себе в workspace
- Выполнить `npm install`
- Запустить проект командой `npm start`

## Выполнение задания:
Сверстать адаптивный макет, используя `postcss` и медиа выражения. В папке есть 3 картинки образца для выполнения. Точки в которых макет должен менять отображение: `375px`, `768px`, `1024px`.

Требования к макету:
- Методология BEM
- Вложенность селекторов `postcss-nested`
- Максимум флексбоксов
- Медиа запросы только `min-width`
- Телефон на странице верстаем с помощью `::before`, `::after` и `border`
- Используем файлы из слэка для фонов и изображений

## Advanced
Разбить CSS на 3 файла для каждого разрешения, и использовать медиа запросы в теге `<link />`.

## Полезные ссылки
- [Bem](https://uk.bem.info/methodology/quick-start/)
- [What is PostCSS?](https://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/)
- [PostCSS Nested](https://github.com/postcss/postcss-nested)
- [Принципы адаптивной вёрстки](https://habr.com/post/243247/)
- [Media query in Link tags](https://css-tricks.com/css-media-queries/)
