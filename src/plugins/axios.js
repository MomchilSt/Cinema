export const appKey = 'kid_ryXFIsuw8';
export const appSecret = '14b24eb6f4644e779632088dbd98e7ef';


// const authString = btoa(`${appKey}:${appSecret}`);
//       axios({
//         method: 'post',
//         url: `https://baas.kinvey.com/user/${appKey}`, 
//         data: { 
//           username: this.username,
//           password: this.password,
//           name: this.name,
//           email: this.email,
//           position: this.select
//         },
//         headers: {
//         'Authorization': `Basic ${authString}`,
//         'Content-Type': 'application/json'
//         }}).then(() => {
//           this.$router.push('/')
//             this.$toast.success('You have successfully registered!', {
//             showClose: true,
//             icon: 'done'
//           });
//         }).catch(() => {
//             this.$toast.error('Error occurred! Please try again.', {
//               showClose: true,
//               icon: 'cancel'
//             });
//         })