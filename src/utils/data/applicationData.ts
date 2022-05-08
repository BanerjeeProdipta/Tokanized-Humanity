const applicationData = [
  {
    // todo data from local storage
    id: 1,
    name: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).name : 'Guest',
    profession: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).profession : '',
    bio: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).bio : '',
    status: 'Pending',
    email: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).email : '',
    phone: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).phone : '',
    address: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).address : '',
    dob: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).dob : '',
    createdDate: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).createdDate : '',
    gender: localStorage.getItem('pendingUser') ? JSON.parse(localStorage.getItem('pendingUser')!).gender : '',
    image: 'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
  },

];

export default applicationData;
