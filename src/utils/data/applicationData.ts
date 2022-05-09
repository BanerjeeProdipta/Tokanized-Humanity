const applicationData = [
  {
    id: 1,
    name:JSON.parse(localStorage.getItem('pendingMember') || '{ }').name,
    profession:JSON.parse(localStorage.getItem('pendingMember') || '{ }').profession ,
    bio:JSON.parse(localStorage.getItem('pendingMember') || '{ }').bio ,
    status: 'Pending',
    email:JSON.parse(localStorage.getItem('pendingMember') || '{ }').email ,
    phone:JSON.parse(localStorage.getItem('pendingMember') || '{ }').phone ,
    address:JSON.parse(localStorage.getItem('pendingMember') || '{ }').address ,
    dob:JSON.parse(localStorage.getItem('pendingMember') || '{ }').dob ,
    createdDate:JSON.parse(localStorage.getItem('pendingMember') || '{ }').createdDate ,
    gender:JSON.parse(localStorage.getItem('pendingMember') || '{ }').gender ,
    image: 'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
  },

];

export default applicationData;
