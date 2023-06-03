import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer';
import { courseReducer } from './reducers/courseReducer';
import { otherReducer } from './reducers/otherReducer';
import {
  profileReducer,
  subscriptionReducer,
  userReducer,
} from './reducers/userReducer';

export const server = 'http://localhost:4000/api/v1';
//  jahan bhi host kariyega uska url de dijiyega aur uske baad /api/v1

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;
