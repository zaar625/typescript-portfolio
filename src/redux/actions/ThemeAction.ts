export const setMode = (mode: string | undefined | null) => {
  return {
    type: 'SET_MODE',
    payload: mode,
  };
};

export const setColor = (color: string | undefined | null) => {
  return {
    type: 'SET_COLOR',
    payload: color,
  };
};

export const getTheme = () => {
  return {
    type: 'GET_THEME',
  };
};

const exportDefault = {
  setColor,
  setMode,
  getTheme,
};

export default exportDefault;
