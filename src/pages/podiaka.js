import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"

const padiaka = () => {
  return (
    <section id="podiaka">
        <SEO title="Подяка" />
       <div className='container'>

            <div className='wrapper'>
                    <h1>
                    Заявка відправлена!

                    </h1>

                    <p>
                    Дякуємо за відправлено заявку! В найближчий час з вам звяжеться наш менеджер.
                    </p>

                    <Link to="/" className='btn btn-primary btn-lg b_f'>
                            Повернутись на головну
                    </Link>
            </div>

       </div>
    </section>
  )
}

export default padiaka