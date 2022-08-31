/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
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
            <main>
                <NaverMap>
                    <Header />
                    <Marker />
                </NaverMap>
            </main>
        </div>
    );
}
