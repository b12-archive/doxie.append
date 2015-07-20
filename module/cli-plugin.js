import append from './index';

export default function (...strings) {
  return append(strings.join(' '));
}
