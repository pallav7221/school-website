import image6 from '../assets/Image6.jpeg';

const AboutInfo = () => {
  return (
    <div className="about-info">
        <div className="vc-office">
            <h1>Office of the <br /> Principal</h1>
            <p>At school, we are driven by a relentless pursuit of academic excellence and a commitment to fostering a vibrant learning community. Our institution stands as a beacon of knowledge, providing a transformative educational experience that empowers individuals to lead, innovate, and make a positive impact on the world. In our pursuit of excellence, we continuously evolve our curriculum, embrace new technologies, and promote interdisciplinary collaboration.</p>
        </div>
        <div className="vc-image" style={{ textAlign: 'center' }}>
            <img src={image6} alt="vcimage" />
            <div className="vc-name">
                <p style={{ fontWeight: 'bold' }}>Urmila Joshi</p>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo
