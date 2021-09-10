import connectors from '../../data/connectors.json'
const INIT_STATE = connectors

export default (state = INIT_STATE, action) => {
  let _data = state.data;
  const { payload, type } = action;
  switch (type) {
    default:
      return { ...state }; 
  }
};