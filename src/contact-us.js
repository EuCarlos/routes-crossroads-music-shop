const CONTACT_US = `
    <div class="container center">
    <div class="content">
        <h1>CONTACT US</h1>
        <p>
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed 
            non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus 
            sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. 
        </p>
        <div class="forms">
            <form action="">
                <input type="text" name="name" id="name" placeholder="Name">
                <input type="email" name="email" id="email" placeholder="E-mail">
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <div class="center">
                    <button id="button-contact">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </div>
`

const contentContactUs = document.getElementById('CONTACT-US')
contentContactUs.innerHTML = CONTACT_US