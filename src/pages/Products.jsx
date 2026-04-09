import React from "react";
import { ImageLinks } from "../static/constants/Image";

const Contact = () => {
  return (
   <main class="main">
 
        <div class="page-title dark-background" data-aos="fade">
            <div class="container position-relative">
                <h1>Our Products</h1>
                <p>Premium quality glitter, sequins, and metallised products for global markets</p>
                <nav class="breadcrumbs">
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li class="current">Products</li>
                    </ol>
                </nav>
            </div>
        </div>
        <section id="products-overview" class="section light-background">
            <div class="container" data-aos="fade-up">

                <div class="section-title text-center mb-5">
                    <h2>Product Categories</h2>
                    <p>Complete range of glitter and metallised products for diverse applications</p>
                </div>

                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <a href="#glitter-powder"
                            class="product-category-card d-block p-4 rounded bg-white shadow-sm text-center">
                            <i class="bi bi-stars" style={{fontSize:12, color: '#C41E8C'}}></i>
                            <h4 class="mt-3">Glitter Powder</h4>
                            <p class="text-muted">Premium polyester glitter in various sizes, shapes, and finishes</p>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <a href="#cosmetic-glitter"
                            class="product-category-card d-block p-4 rounded bg-white shadow-sm text-center">
                            <i class="bi bi-gem" style={{fontSize:12, color: '#C41E8C'}}></i>
                            <h4 class="mt-3">Cosmetic Glitter</h4>
                            <p class="text-muted">Skin-safe glitter for nails, lips, body art & cosmetics</p>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <a href="#biodegradable"
                            class="product-category-card d-block p-4 rounded bg-white shadow-sm text-center">
                            <i class="bi bi-recycle" style={{fontSize:12, color: '#28a745'}}></i>
                            <h4 class="mt-3">Biodegradable Glitter</h4>
                            <p class="text-muted">Eco-friendly glitter - first in India since 2023</p>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <a href="#lmpf-films"
                            class="product-category-card d-block p-4 rounded bg-white shadow-sm text-center">
                            <i class="bi bi-film" style={{fontSize:12, color: '#553C9A'}}></i>
                            <h4 class="mt-3">LMPF Films</h4>
                            <p class="text-muted">Lacquered Metallised Polyester Films for yarn & packaging</p>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <a href="#sequins"
                            class="product-category-card d-block p-4 rounded bg-white shadow-sm text-center">
                            <i class="bi bi-hexagon" style={{fontSize:12, color: '#C41E8C'}}></i>
                            <h4 class="mt-3">Sequins & Confetti</h4>
                            <p class="text-muted">High-quality sequins for textiles, fashion & celebrations</p>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <a href="#glitter-glue"
                            class="product-category-card d-block p-4 rounded bg-white shadow-sm text-center">
                            <i class="bi bi-droplet-half" style={{fontSize:12, color: '#C41E8C'}}></i>
                            <h4 class="mt-3">Glitter Glue</h4>
                            <p class="text-muted">Non-toxic glitter glue in pens & tubes for crafts</p>
                        </a>
                    </div>
                </div>

            </div>
        </section> 
        <section id="glitter-powder" class="section">
            <div class="container" data-aos="fade-up">

                <div class="row align-items-center g-5">
                    <div class="col-lg-6" data-aos="fade-right">
                        <div class="section-title">
                            <span class="badge bg-warning text-dark mb-3">Best Seller</span>
                            <h2>Glitter Powder</h2>
                        </div>
                        <p class="lead">We take great pride in producing the highest quality metallic fibers and powders
                            in the industry. Our metallic fibers are produced by specialized wire shaving and precision
                            technology.</p>

                        <div class="row g-3 mt-4">
                            <div class="col-md-6">
                                <h5><i class="bi bi-check-circle-fill text-success me-2"></i>Types Available</h5>
                                <ul class="list-unstyled ms-4">
                                    <li>Polyester Glitter</li>
                                    <li>Holographic Glitter</li>
                                    <li>Neons & Electrics</li>
                                    <li>Rainbow/Iridescent</li>
                                    <li>Aluminum Glitter</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h5><i class="bi bi-check-circle-fill text-success me-2"></i>Shapes</h5>
                                <ul class="list-unstyled ms-4">
                                    <li>Hexagon & Square</li>
                                    <li>Heart & Moon</li>
                                    <li>Rhombus & Dots</li>
                                    <li>Fibers & Unicorn</li>
                                    <li>Cup Shapes</li>
                                </ul>
                            </div>
                        </div>

                        <div class="specs-box bg-light p-4 rounded mt-4">
                            <h5 class="mb-3">Specifications</h5>
                            <div class="row">
                                <div class="col-6">
                                    <p class="mb-2"><strong>Sizes:</strong> 0.002" to 6mm Hex</p>
                                    <p class="mb-2"><strong>MOQ:</strong> 1 Kilogram</p>
                                </div>
                                <div class="col-6">
                                    <p class="mb-2"><strong>Delivery:</strong> 7 Days</p>
                                    <p class="mb-2"><strong>Port:</strong> Vadodara</p>
                                </div>
                            </div>
                        </div>
 
                        <div class="colors-section mt-4" data-aos="fade-up">
                            <h5 class="mb-3"><i class="bi bi-palette me-2"></i>Colors Available</h5>
                            <div class="d-flex flex-wrap gap-2">
                                <span class="badge rounded-pill"
                                    style={{background: 'linear-gradient(135deg, #C0C0C0, #A0A0A0)', padding: '8px 12px'}}>Bright
                                    Silver</span>
                                <span class="badge rounded-pill"
                                    style={{background: 'linear-gradient(135deg, #D4AF37, #B8962E)', padding: '8px 12px'}}>Bright
                                    Gold</span>
                                <span class="badge rounded-pill bg-danger" style={{padding: '8px 12px'}}>Bright Red</span>
                                <span class="badge rounded-pill bg-dark" style={{padding: '8px 12px'}}>Black</span>
                                <span class="badge rounded-pill" style={{background: '#B87333', padding: '8px 12px'}}>Bright
                                    Copper</span>
                                <span class="badge rounded-pill"
                                    style={{background: '#C41E8C', padding: '8px 12px'}}>Magenta</span>
                                <span class="badge rounded-pill" style={{background: '#00A36C', padding: '8px 12px'}}>Jade
                                    Green</span>
                                <span class="badge rounded-pill"
                                    style={{background: '#0F52BA', padding: '8px 12px'}}>Sapphire Blue</span>
                                <span class="badge rounded-pill" style={{background: '#553C9A', padding: '8px 12px'}}>Bright
                                    Purple</span>
                                <span class="badge rounded-pill" style={{background: '#FF69B4', padding: '8px 12px'}}>Bright
                                    Pink</span>
                                <span class="badge rounded-pill"
                                    style={{background: 'linear-gradient(135deg, #ff0080, #00ff80, #0080ff)', color: '#fff', padding: '8px 12px'}}>Holographic</span>
                            </div>
                            <p class="text-muted mt-3 small"><i class="bi bi-info-circle me-1"></i>Custom colors
                                available on request. Full shade card available.</p>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-left">
                        <img src={ImageLinks.glitterPowder} alt="Glitter Powder" class="img-fluid rounded shadow"/>
                    </div>
                </div>

            </div>
        </section> 
        <section id="cosmetic-glitter" class="section light-background">
            <div class="container" data-aos="fade-up">

                <div class="row align-items-center g-5">
                    <div class="col-lg-6 order-lg-2" data-aos="fade-left">
                        <div class="section-title">
                            <span class="badge bg-danger mb-3">Cosmetic Safe</span>
                            <h2>Cosmetic Glitter</h2>
                        </div>
                        <p class="lead">Our cosmetic glitter is specially developed to be <strong>solvent resistant and
                                formaldehyde free</strong>. Recommended and safe for all cosmetic applications.</p>

                        <div class="row g-4 mt-3">
                            <div class="col-6">
                                <div class="cosmetic-product p-3 bg-white rounded shadow-sm text-center">
                                    <i class="bi bi-palette2" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                                    <h6 class="mt-2">Nail Polish</h6>
                                    <img src={ImageLinks.nailArt} alt="Nail Art" class="img-fluid mt-2"/>
                                    <small class="text-muted">Rhombus Shape</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="cosmetic-product p-3 bg-white rounded shadow-sm text-center">
                                    <i class="bi bi-brush" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                                    <h6 class="mt-2 ">Nail Art</h6>
                                    <img src={ImageLinks.nails} alt="Nail Art" class="img-fluid mt-2"/>
                                    <small class="text-muted">Fine Powder</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="cosmetic-product p-3 bg-white rounded shadow-sm text-center">
                                    <i class="bi bi-emoji-smile" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                                    <h6 class="mt-2">Lips & Face</h6>
                                    <img src={ImageLinks.lipArt} alt="Nail Art" class="img-fluid mt-2"/>
                                    <small class="text-muted">Skin-Safe</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="cosmetic-product p-3 bg-white rounded shadow-sm text-center">
                                    <i class="bi bi-stars" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                                    <h6 class="mt-2">Body Glitter</h6>
                                    <img src={ImageLinks.bodyArt} alt="Nail Art" class="img-fluid mt-2"/>
                                    <small class="text-muted">All Types</small>
                                </div>
                            </div>
                        </div>

                        <div class="alert alert-success mt-4">
                            <i class="bi bi-shield-check me-2"></i>
                            <strong>Quality Assured:</strong> Durability, Shelf-life, Skin-friendliness, Shine & Safety
                            tested
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1" data-aos="fade-right">
                        <img src={ImageLinks.bgsection} alt="Cosmetic Glitter"
                            class="img-fluid rounded shadow"/>
                    </div>
                </div>

            </div>
        </section> 
        <section id="biodegradable" class="section">
            <div class="container" data-aos="fade-up">

                <div class="row align-items-center g-5">
                    <div class="col-lg-6" data-aos="fade-right">
                        <div class="section-title">
                            <span class="badge bg-success mb-3">🌿 Eco-Innovation</span>
                            <h2>Biodegradable Glitter</h2>
                        </div>
                        <p class="lead">Developed in 2023, we are one of the <strong>first companies in India</strong>
                            and among the few in Asia to offer biodegradable glitter.</p>

                        <ul class="list-group list-group-flush mt-4">
                            <li class="list-group-item d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-success me-3"></i>
                                <span>100% Biodegradable composition</span>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-success me-3"></i>
                                <span>Environmentally friendly production</span>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-success me-3"></i>
                                <span>Same sparkle as conventional glitter</span>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-success me-3"></i>
                                <span>Ideal for eco-conscious brands</span>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-success me-3"></i>
                                <span>Global compliance ready</span>
                            </li>
                        </ul>

                        <a href="contact.html" class="btn btn-success btn-lg mt-4">
                            <i class="bi bi-envelope me-2"></i>Request Sample
                        </a>
                    </div>
                    <div class="col-lg-6" data-aos="fade-left">
                        <img src={ImageLinks.biodegradable} alt="Biodegradable Glitter"
                            class="img-fluid rounded shadow"/>
                    </div>
                </div>

            </div>
        </section> 
        <section id="lmpf-films" class="section light-background">
            <div class="container" data-aos="fade-up">

                <div class="section-title text-center mb-5">
                    <h2>Lacquered Metallised Polyester Films (LMPF)</h2>
                    <p>Made using in-house produced Metallised Films and Resins</p>
                </div>

                <div class="row gy-4">
                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="film-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <div class="film-icon mb-3" style={{fontSize:12, color: '#553C9A'}}>
                                <i class="bi bi-layers"></i>
                            </div>
                            <h4>One Side LMPF</h4>
                            <p class="text-muted">Single side lacquered metallised polyester film for standard
                                applications</p>
                            <span class="badge bg-light text-dark">12-130 Microns</span>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="film-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <div class="film-icon mb-3" style={{fontSize:12, color: '#C41E8C'}}>
                                <i class="bi bi-layers-fill"></i>
                            </div>
                            <h4>Both Side LMPF</h4>
                            <p class="text-muted">Double side lacquered film for enhanced durability and finish</p>
                            <span class="badge bg-light text-dark">12-130 Microns</span>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div class="film-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <div class="film-icon mb-3" style={{fontSize:12, color: '#C41E8C'}}>
                                <i class="bi bi-rainbow"></i>
                            </div>
                            <h4>Holographic LMPF</h4>
                            <p class="text-muted">Rainbow effect metallised film for premium decorative applications</p>
                            <span class="badge bg-light text-dark">12-130 Microns</span>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <div class="stats-inline d-inline-flex flex-wrap gap-4 justify-content-center">
                        <div class="stat-item text-center">
                            <h3 style={{color: '#D4AF37'}}>2,400</h3>
                            <small>MT Annual Capacity</small>
                        </div>
                        <div class="stat-item text-center">
                            <h3 style={{color: '#553C9A'}}>24,000</h3>
                            <small>MT Market Size (India)</small>
                        </div>
                    </div>
                </div>

            </div>
        </section> 
        <section id="sequins" class="section">
            <div class="container" data-aos="fade-up">

                <div class="row align-items-center g-5">
                    <div class="col-lg-6" data-aos="fade-right">
                        <div class="section-title">
                            <h2>Sequins & Confetti</h2>
                        </div>
                        <p class="lead">High-quality sequins and confetti perfect for adding glamour to textiles,
                            fashion, home decor, and celebrations.</p>

                        <div class="row g-4 mt-3">
                            <div class="col-md-6">
                                <h5><i class="bi bi-hexagon-fill text-warning me-2"></i>Sequins</h5>
                                <ul class="list-unstyled ms-4">
                                    <li>✓ Fade resistant</li>
                                    <li>✓ Safe & non-toxic</li>
                                    <li>✓ Classic silver/gold</li>
                                    <li>✓ Bold brights</li>
                                    <li>✓ Delicate pastels</li>
                                </ul>
                                <p class="mt-2"><strong>Capacity:</strong> 150 MT/year</p>
                            </div>
                            <div class="col-md-6">
                                <h5><i class="bi bi-balloon-heart-fill text-danger me-2"></i>Confetti</h5>
                                <ul class="list-unstyled ms-4">
                                    <li>✓ Random cut glitter</li>
                                    <li>✓ Multi-colored options</li>
                                    <li>✓ Custom color schemes</li>
                                    <li>✓ Safe for skin & fabric</li>
                                    <li>✓ Perfect for events</li>
                                </ul>
                                <p class="mt-2"><strong>Capacity:</strong> 200 MT/year</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-left">
                        <img src={ImageLinks.sequins} alt="Sequins and Confetti"
                            class="img-fluid rounded shadow"/>
                    </div>
                </div>

            </div>
        </section> 
        <section id="glitter-glue" class="section light-background">
            <div class="container" data-aos="fade-up">

                <div class="section-title text-center mb-5">
                    <h2>Glitter Glue</h2>
                    <p>Non-toxic, kid-safe glitter glue for crafting, cards, and scrapbooking</p>
                </div>

                <div class="row gy-4 justify-content-center">
                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                        <div class="glue-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-pen" style={{fontSize: '2.5rem', color: '#C41E8C'}}></i>
                            <h5 class="mt-3">10ml Pens</h5>
                            <p class="text-muted">6pc, 12pc, 15pc sets</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div class="glue-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-pencil" style={{fontSize: '2.5rem', color: '#553C9A'}}></i>
                            <h5 class="mt-3">5ml Pens</h5>
                            <p class="text-muted">6pc, 10pc sets</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div class="glue-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-droplet" style={{fontSize: '2.5rem', color: '#D4AF37'}}></i>
                            <h5 class="mt-3">Tubes</h5>
                            <p class="text-muted">Single & Multi packs</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="glue-card p-4 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#28a745'}}></i>
                            <h5 class="mt-3">Kid-Safe</h5>
                            <p class="text-muted">Non-toxic certified</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <p class="mb-3"><strong>Annual Production Capacity:</strong> 200 MT</p>
                </div>

            </div>
        </section> 
        <section id="retail-packaging" class="section">
            <div class="container" data-aos="fade-up">

                <div class="section-title text-center mb-5">
                    <span class="badge bg-warning text-dark mb-3">Export Focus</span>
                    <h2>Retail Packaging Options</h2>
                    <p>Packaged glitter for retail markets - supplying Walmart, Michaels, and Hobby Lobby</p>
                </div>

                <div class="row gy-4 justify-content-center">
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-pen" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                            <h6 class="mt-2">Glitter Glue Pens</h6>
                            <small class="text-muted">10ml</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="150">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-box" style={{fontSize: '2rem', color: '#D4AF37'}}></i>
                            <h6 class="mt-2">Glitter Shakers</h6>
                            <small class="text-muted">Various sizes</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-grid-3x3-gap" style={{fontSize: '2rem', color: '#553C9A'}}></i>
                            <h6 class="mt-2">Glitter Minis</h6>
                            <small class="text-muted">Blister Pack</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="250">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-bag" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                            <h6 class="mt-2">Glitter Pouches</h6>
                            <small class="text-muted">6pc sets</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-capsule" style={{fontSize: '2rem', color: '#D4AF37'}}></i>
                            <h6 class="mt-2">Flip Tubes</h6>
                            <small class="text-muted">Single & Double</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="350">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-stack" style={{fontSize: '2rem', color: '#553C9A'}}></i>
                            <h6 class="mt-2">Glitter Stacker</h6>
                            <small class="text-muted">2oz / 2.3oz</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-archive" style={{fontSize: '2rem', color: '#C41E8C'}}></i>
                            <h6 class="mt-2">PET Jars</h6>
                            <small class="text-muted">1oz to 4oz</small>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="450">
                        <div class="packaging-card p-3 bg-white rounded shadow-sm text-center h-100">
                            <i class="bi bi-droplet-half" style={{fontSize: '2rem', color: '#D4AF37'}}></i>
                            <h6 class="mt-2">Bottles</h6>
                            <small class="text-muted">4oz & 16oz</small>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5" data-aos="fade-up">
                    <div class="alert alert-info d-inline-block">
                        <i class="bi bi-award me-2"></i>
                        <strong>SGS SMETA Audit Approved</strong> | CTPAT & FCCA Compliant
                    </div>
                </div>

            </div>
        </section> 
        <section id="industries" class="section">
            <div class="container" data-aos="fade-up">

                <div class="section-title text-center mb-5">
                    <h2>Industries We Serve</h2>
                    <p>Our products find applications across diverse industries worldwide</p>
                </div>

                <div class="row gy-4 text-center">
                    <div class="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="industry-item p-3">
                            <i class="bi bi-brush" style={{fontSize: '2.5rem', color: '#D4AF37'}}></i>
                            <h6 class="mt-2">Textiles</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="industry-item p-3">
                            <i class="bi bi-gem" style={{fontSize: '2.5rem', color: '#C41E8C'}}></i>
                            <h6 class="mt-2">Cosmetics</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="industry-item p-3">
                            <i class="bi bi-building" style={{fontSize: '2.5rem', color: '#553C9A'}}></i>
                            <h6 class="mt-2">Construction</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="industry-item p-3">
                            <i class="bi bi-pencil" style={{fontSize: '2.5rem', color: '#D4AF37'}}></i>
                            <h6 class="mt-2">Stationery</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="500">
                        <div class="industry-item p-3">
                            <i class="bi bi-scissors" style={{fontSize: '2.5rem', color: '#28a745'}}></i>
                            <h6 class="mt-2">Crafts</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="600">
                        <div class="industry-item p-3">
                            <i class="bi bi-box" style={{fontSize: '2.5rem', color: '#553C9A'}}></i>
                            <h6 class="mt-2">Plastics</h6>
                        </div>
                    </div>
                </div>

            </div>
        </section> 
        <section id="cta" class="cta section dark-background">
            <div class="container" data-aos="fade-up">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2>Looking for Custom Glitter Solutions?</h2>
                        <p class="mb-4">We offer free sampling policy. Send us your specifications and we'll customize
                            our products to match your exact requirements.</p>
                        <a href="contact.html" class="btn btn-cta btn-lg">Request a Quote</a>
                    </div>
                </div>
            </div>
        </section> 

    </main>
    );
};
export default Contact;