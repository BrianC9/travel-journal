import '../styles/Card.css'

export default function Card(props) {
    const { title, location, googleMapsUrl: maps, startDate, endDate, description, imageUrl: img } = props.items

    return (
        <section className="Card">
            <img src={img} alt={`Foto de ${location}`} className="Card--img" />
            <div className='Card--desc'>
                <div className='desc--location'>   <img src='https://img.icons8.com/ios-filled/48/fa314a/marker.png' className='desc--icon--locat' alt='location icon' />
                    <span className='desc--location--country'>{location}</span>


                    <a className='Card--link' target='_blank' rel='noreferrer' href={`${maps}`}>View on Google Maps</a>
                </div>
                <h2 className='Card--title'>{title}</h2>
                <span className='Card--dates'>{startDate} - {endDate}</span>
                <span>{description}</span>

            </div>
        </section>
    )
}