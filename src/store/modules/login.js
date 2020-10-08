import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios'
// initial state
const initialState = {
    loggedIn : "false",
    token: null,
    askOtp: 'false',
    existingUser: 'false',
    resentOtp: 'false',
    failedOtp: 'false'
};
// getters
const getters = {
  getField
};

const actions = {
    async login({ commit }, { body }) {
        commit('loggedIn', 'false');
        commit('askOtp','false');
        commit('existingUser','false')
        commit('token',null)
        try {
            let stringBody = JSON.stringify(body);
            let encryptedBody = btoa(stringBody);
            await axios.post("http://localhost:8080/login", null,  {
                headers : {
                    'Access-Control-Allow-Origin':'*',
                    'login': encryptedBody
                }
            }).then((response) => {
                if(response.headers.error) {
                    throw Error;
                } else if (response.status <= 299 && response.headers.token  && response.headers.token !== 'unverified') {
                    commit('loggedIn','true');
                    commit('token',response.headers.token);
                } else {
                    commit('askOtp','true')
                }
            });
        } catch (error) {
            commit('loggedIn','failed');
        }
    },
    async reset({ commit }) {
        commit('loggedIn', 'false');
        commit('askOtp','false');
        commit('existingUser','false');
        commit('token',null);
        commit('failedOtp','false');
        commit('resendOtp','false');

    },
    async sign({ commit}, { body }) {
        commit('loggedIn', 'false');
        commit('askOtp','false');
        commit('existingUser','false');
        commit('token',null);
        try {
            let stringBody = JSON.stringify(body);
            let encryptedBody = btoa(stringBody);
            await axios.post("http://localhost:8080/signup", null,  {
                headers : {
                    'Access-Control-Allow-Origin':'*',
                    'signup': encryptedBody
                }
            }).then((response) => {
                if( response.headers.signup == 'otpSent'){
                    commit('askOtp','true');
                } else if(response.headers.signup == 'userExist'){
                    commit('existingUser','true');
                }
            });
        }
        catch (error) {
            commit('loggedIn','failed');
        }
    },
    async otpVerify({commit},{ body }) {
        commit('failedOtp','false')
        try {
            let stringBody = JSON.stringify(body);
            let encryptedBody = btoa(stringBody);
            await axios.post("http://localhost:8080/verifyOtp", null,  {
                headers : {
                    'Access-Control-Allow-Origin':'*',
                    'verifyOtp': encryptedBody
                }
            }).then((response) => {
                if (response.headers.error) {
                    commit('failedOtp','true')
                } else if (response.status <= 299 && response.headers.token) {
                    commit('loggedIn','true');
                    commit('token',response.headers.token);
                }
            });
        }
        catch (error) {
            commit('loggedIn','failed');
        }
    },
    async resend({commit},{body}) {
        commit('loggedIn','false')
        commit('resendOtp','false');
        try {
            let stringBody = JSON.stringify(body);
            let encryptedBody = btoa(stringBody);
            await axios.post("http://localhost:8080/resend", null,  {
                headers : {
                    'Access-Control-Allow-Origin':'*',
                    'resendOtp': encryptedBody
                }
            }).then((response) => {
                if (response.status <= 299) {
                    commit('resendOtp','true');
                }
            });
        }
        catch (error) {
            commit('resendOtp','failed');
        }
    }

}
const mutations = {
    updateField,
    loggedIn(state, loggedIn) {
        state.loggedIn = loggedIn;
      },
      token(state, token) {
        state.token = token;
      },
      askOtp(state, askOtp) {
          state.askOtp = askOtp;
      },
      existingUser(state, existingUser) {
          state.existingUser = existingUser
      },
      resendOtp(state, resendOtp) {
          state.resendOtp = resendOtp
      },
      failedOtp(state, failedOtp) {
          state.failedOtp = failedOtp
      }
  };

  export default {
    namespaced: true,       
    state: initialState,
    getters,
    actions,
    mutations
  };
