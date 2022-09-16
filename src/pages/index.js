/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import NaverMap from '../components/NaverMap';
import Marker from '../components/NaverMap/Marker';
import Header from '../container/Home/Header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                strategy="beforeInteractive"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
            ></Script>
            <main>
                <NaverMap>
                    <Header />
                    <Marker />
                </NaverMap>
            </main>
        </div>
    );
}
