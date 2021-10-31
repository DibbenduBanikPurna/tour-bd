import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '550px' }}
                        className="d-block w-100"
                        src="https://www.travelmate.com.bd/wp-content/uploads/2019/06/Tanguar-Haor-Sunamganj-1024x683.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>টাঙ্গুয়ার হাওর</h3>
                        <p className="text-light">টাঙ্গুয়ার হাওর বৃহত্তর সিলেটের সুনামগঞ্জ জেলায় অবস্থিত। প্রায় একশো বর্গকিলোমিটার এলাকা জুড়ে বিস্তৃত টাঙ্গুয়ার হাওর বাংলাদেশের দ্বিতীয় বৃহত্তম মিঠেপানির জলাভূমি। স্থানীয়দের কাছে হাওরটি ‘নয়কুড়ি কান্দার ছয়কুড়ি বিল’ নামেও পরিচিত। সুন্দরবনের পরে এটি বাংলাদেশের দ্বিতীয় রামসার সাইট (আন্তর্জাতিকভাবে গুরুত্বপূর্ণ জলাভূমি)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://i.pinimg.com/736x/9f/fa/8f/9ffa8f963529837f0f0e4bfcaf8fb3bc.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>কক্সবাজার সমুদ্র সৈকত</h3>
                        <p className="text-light">কক্সবাজার সমুদ্র সৈকত বাংলাদেশের প্রধান পর্যটন আকর্ষণ। এই 120 কিলোমিটার দীর্ঘ বালুকাময় বিশ্বের দীর্ঘতম সমুদ্র সৈকত প্রতি বছর দেশ-বিদেশের হাজার হাজার পর্যটককে আকর্ষণ করে। প্রতি বছর অনেক অনেক প্রকৃতি প্রেমী এই সমুদ্র সৈকতে গভীর শ্বাস নিতে এবং ডুব দিতে আসেন।</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://bdsearcher.com/wp-content/uploads/2017/12/Sajek-Valley.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>সাজেক ভ্যালি</h3>
                        <p className="text-light">বাংলার দার্জিলিং, সাজেক হল দেশের বৃহত্তম ইউনিয়ন (প্রায় 720 বর্গমাইল), পার্বত্য চট্টগ্রামের সবচেয়ে উত্তরে, ভারতের ত্রিপুরা (উত্তর দিকে), মিজোরাম (পূর্ব দিকে) এর পাশে অবস্থিত। এই পার্শ্ববর্তী প্রাকৃতিক বায়বীয় স্থানটি সমুদ্রপৃষ্ঠ থেকে 2000 ফুট উচ্চতার কাছাকাছি।</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;