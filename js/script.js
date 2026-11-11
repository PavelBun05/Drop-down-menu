const profile = document.getElementById('headerProfile');
const profileMenu = document.getElementById('profileMenu');

profile.addEventListener('click', function(e) {
    e.stopPropagation();
    profileMenu.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!profileMenu.contains(e.target) && !profile.contains(e.target)) {
        profileMenu.classList.remove('active');
    }
});