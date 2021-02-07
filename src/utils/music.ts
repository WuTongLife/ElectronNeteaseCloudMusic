export const leftZero = (num: number) => (Array(2).join('0') + num).slice(-2);

export const formatMusicTime = (time: number) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  return `${leftZero(minutes)}:${leftZero(seconds)}`;
};

export const nextItem = <T extends { id: number }>(
  musics: T[],
  targetId: number,
) => {
  let index = musics.findIndex((item) => targetId === item.id);
  return musics[index === musics.length - 1 ? 0 : index + 1];
};

export const preItem = <T extends { id: number }>(
  musics: T[],
  targetId: number,
) => {
  let index = musics.findIndex((item) => targetId === item.id);
  return musics[index === 0 ? musics.length - 1 : index - 1];
};
