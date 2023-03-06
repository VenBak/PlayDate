// DELETE a dog from SINGLE PROFILE
const delButtonSingleProfileHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/dogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to delete dog profile');
        }
    }
};
document
    .querySelector('#dog-section').addEventListener('click', delButtonSingleProfileHandler);