import React from 'react';
import styles from '../Homepage/Home.module.css';
import Column from './Column';
import Popular from './Popular';
import TopNews from './TopNews'
import Trending from './Trending';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
        {/* <Navbar/> */}
        <div style={{width:"80%", height:"100px"}}/>
            <div className={styles.container} >
                <div className={styles.left}>
                    <Trending />
                </div>
                <TopNews />
                <div className={styles.right}>
                    <Popular />
                    <Column />
                </div>
            </div>


            <div className={styles.cartoon}>
                <div>
                    <div className={styles.rightDiv}>
                        <h5 className={styles.heading}>CARTOON OF DAY</h5>
                    </div>
                    <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/10bbf4172dac56f915d3bc7210147720639ab8ee-tc-img-web.jpg' alt='' />
                </div>
                <div>
                    <div className={styles.rightDiv}>
                        <h5 className={styles.heading}>COUNTER POINT</h5>
                    </div>
                    <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/afc3f1f9bea9b05b29f6d56e854ef15d08dcf921-tc-img-web.jpg' alt='' />
                </div>
                <div className={styles.adv}>
                    <div className={styles.rightDiv}>
                        <h5 className={styles.heading}>LAST LAUGHS</h5>
                    </div>
                    <img src='https://static.theprint.in/wp-content/uploads/2017/10/Manjul-26.jpg?compress=true&quality=80&w=376&dpr=2.6' alt='' />
                </div>
            </div>


            <div className={styles.south}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>SOUTH</h5>
                </div>
                <div className={styles.southDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-4v24huvehu1ggor0uk567vnju0-20210922142952.jpeg' alt='' />
                        <p>
                            Gradual rise in COVID-19 cases in Kerala; fresh infections cross 3,000 mark</p>
                    </div>
                    <div>
                        <img src='https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-onn7pupo9jl9ojidnq6mi2va13-20160322070816.jpeg' alt='' />
                        <p>
                            Amaravati road works hit as farmers argue on land release</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-p8lt3bb06rknka3avrqu27f4m7-20220615225229.jpeg' alt='' />
                        <p>
                            Rain for few hours floods areas in Hyderabad</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-51i6jeuvc7244p4rl8e91rim51-20220510104908.jpeg' alt='' />
                        <p>
                            Monsoon Emergency Teams pressed into action in Hyderabad</p>
                    </div>
                </div>
            </div>


            <div className={styles.entertainment}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>ENTERTAINMENT</h5>
                </div>
                <div className={styles.entertainmentDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-l970jo2ftej89gr8urqkbd2093-20220329194904.jpeg' alt='' />
                        <p>Salman Khan denies any threat to life</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-767hsm5tsvbhpu92u5t5hpout6-20201021154140.jpeg' alt='' />
                        <p>Ante Sundaraniki is a light-hearted drama</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rr3g3eqojk0d79epl7ch1jgca3-20220606023535.jpeg' alt='' />
                        <p>Bitten by the writing bug</p>
                    </div>
                </div>
            </div>


            <div className={styles.sports}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>SPORTS</h5>
                </div>
                <div className={styles.sportsDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rminq6lic303n6o6h5727fsro5-20220509000956.jpeg' alt='' />
                        <p>Age fraud in sports selection comes down drastically, thanks to technology</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0kuoe4sllca81gvnf2data0s30-20220520194235.jpeg' alt='' />
                        <p>Nikhat Zareen’s historic gold enthuses Indian boxing enthusiasts</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-tfvvjg605k774cc039o1ho82t5-20220603234707.jpeg' alt='' />
                        <p>Hyderabad set for Formula E debut on February 11 next year</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rtop1t758f9ta53c6d4fcm6ih4-20220529063915.jpeg' alt='' />
                        <p>A dream come true, Mp boy take RCB to final</p>
                    </div>
                </div>
            </div>


            <div className={styles.lifestyle}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>LIFESTYLE</h5>
                </div>
                <div className={styles.lifestyleDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jsea3jl94darm4h6b8f4mhp542-20220607011850.jpeg' alt='' />
                        <p>A rainbow on my plate</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-r7s8taq5hp0fm1upu432k0g040-20170816083125.jpeg' alt='' />
                        <p>Youngsters sleepless in Hyderabad</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-nf91gd4p2081f7hk92grbsg4p3-20190921002020.jpeg' alt='' />
                        <p>Listen to your body when it warns you that you’re heading for trouble</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-opfmtb79e99qq2n8q4sjh5aee2-20190514013250.jpeg' alt='' />
                        <p>King Koti hospital to use a device to alleviate labour pain</p>
                    </div>
                </div>
            </div>


            <div className={styles.entertainment}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>SOUTH ENTERTAINMENT</h5>
                </div>
                <div className={styles.entertainmentDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-f8h4gr5nq4n37ck1gepve9dpr1-20220604014227.jpeg' alt='' />
                        <p>‘Glad Brahmastra team liked my suggestions’</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-k4q340ca7hi1m5hc9p4l1el3k4-20220603175831.jpeg' alt='' />
                        <p>Major movie review</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-gebfu1e8dchf9jretr7vgkb0m6-20220602000140.jpeg' alt='' />
                        <p>People skip theatres, watch movies on OTTs</p>
                    </div>
                </div>
            </div>


            <div className={styles.lifestyle}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>WORLD</h5>
                </div>
                <div className={styles.lifestyleDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-5g7vgledtsadhkq80f0f9fchu5-20220616091207.jpeg' alt='' />
                        <p>Biden’s chief medical adviser Anthony Fauci tests COVID positive, has mild symptoms</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-g8esftggd71s5rmm0p3lflkl10-20220612064214.jpeg' alt='' />
                        <p>China is hardening its position along LAC; US Secretary of Defense</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-t1g02g0da4okqabdmppkrung71-20220611115202.jpeg' alt='' />
                        <p>US lifts COVID-19 test requirement for international travel</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jgbpi0o0p2ld76muet9tu5gvc5-20220607105000.jpeg' alt='' />
                        <p>Boris Johnson wins no-confidence vote: but the margin will make him nervous</p>
                    </div>
                </div>
            </div>


            <div className={styles.lifestyle}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>BUSINESS</h5>
                </div>
                <div className={styles.lifestyleDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-88vtd9vepltj59hdt59nhdk7h0-20200419165410.jpeg' alt='' />
                        <p>Minimum 10-15% increase in airfares must: SpiceJet CMD</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-qo4lkc94037m2ug36rq5r9q8a6-20200714090115.jpeg' alt='' />
                        <p>Food prices help inflation cool down to 7.04% in May</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-g8d99r8ugt58lbifq7jrhbhpd3-20220613060736.jpeg' alt='' />
                        <p>Massive Rs 24,000 cr investment for Telangana</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-au7mok02br0m258dgrfuqgmvt0-20200612111912.jpeg' alt='' />
                        <p>Rupee plunges to new record low at 77.85, down 11 paise</p>
                    </div>
                </div>
            </div>


            <div className={styles.lifestyle}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>SCIENCE</h5>
                </div>
                <div className={styles.lifestyleDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-aisagfk0ehoefj56fuh306usc3-20220525074238.jpeg' alt='' />
                        <p>ISRO, ASA meet for Gaganyaan’s ground station</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-dk7g1grjaaq2ojhhrl1n1tsir2-20220514074745.jpeg' alt='' />
                        <p>ISRO test fires booster rocket for Gaganyaan</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-m8dvsimv0ukid03kt8vv3cu623-20220513140141.jpeg' alt='' />
                        <p>Scientists grow plants in soil from Moon for first time</p>
                    </div>
                    <div>
                        <p className={styles.adv}>Advertisement</p>
                    </div>
                </div>
            </div>


            <div className={styles.lifestyle}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>TECHNOLOGY</h5>
                </div>
                <div className={styles.lifestyleDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-v981omqo94ugmfqbfks9qgjt65-20220429104929.jpeg' alt='' />
                        <p>Musk sells $4B in Tesla shares, presumably for Twitter deal</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-blettn0hj8o3gok43isvb63oa4-20211001153058.jpeg' alt='' />
                        <p>Twitter, under shareholder pressure, begins deal talks with Musk</p>
                    </div>
                    <div>
                        <img src='https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-ofcq20cipn0iumjtnnm0igbui6-20160503111842.jpeg' alt='' />
                        <p>Beware of video calls from stranger, warn police</p>
                    </div>
                    <div>
                        <p className={styles.adv}>Advertisement</p>
                    </div>
                </div>
            </div>



            <div className={styles.lifestyle}>
                <div className={styles.southHead}>
                    <h5 className={styles.heading}>EDITOR'S PICKS</h5>
                </div>
                <div className={styles.lifestyleDiv}>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0k9bpt67qg7uuq8cvcj5krvto0-20220613090900.jpeg' alt='' />
                        <p>Govt schools across TS in dire straits, poor infra hampering quality education</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-fophas0d0l9fu3em84somap0n1-20180419062047.jpeg' alt='' />
                        <p>12-yr-old girl flees after forcible marriage to 35-year-old uncle in TS</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jo4gv47qlta9dm26aflc6le3i4-20180816125314.jpeg' alt='' />
                        <p>Experts for study on bee population</p>
                    </div>
                    <div>
                        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-tjbmaee6vvttimvhi4drslcvs0-20220503005019.jpeg' alt='' />
                        <p>Report: India might turn zoonotic disease hotspot</p>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
};

export default Home;