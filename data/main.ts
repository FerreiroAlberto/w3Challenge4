import './styles.css';
import { series } from './series';
import { Header } from './header.ts';
import { Serie } from './serie.ts';

new Header('header');
const watched = series.filter((item) => item.watched === true);
const pending = series.filter((item) => item.watched === false);

pending.map((item) => new Serie('.series-list--pending', item));
watched.map((item) => new Serie('.series-list--watched', item));
