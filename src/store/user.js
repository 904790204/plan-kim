let initState = {
  userName: '',
  userId:'',
  portraitUrl:''
}
function user(state = initState,action){
  switch(action.type){
    case 'SET_USERINFO':
      state.userName = action.userName
      state.userId = action.userId
      state.portraitUrl = action.portraitUrl
      return {...state}
    default:
      return state
  }
}
export default user