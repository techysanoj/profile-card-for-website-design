let shareMyProfileBtn = document.querySelector('#profile-follow');
let crossProfile = document.querySelector('#cross');
let profile = document.getElementById('share-profile');

function disableProfile() {
    profile.classList.add('hidden');
    profile.classList.remove('visible');  // Remove the visible class to hide with animation
}

function showProfile() {
    profile.classList.add('visible');
    profile.classList.remove('hidden');   // Remove the hidden class to show it with animation
}

shareMyProfileBtn.addEventListener('click', showProfile);
crossProfile.addEventListener('click', disableProfile);
