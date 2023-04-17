import React, { Component } from 'react';
import logo from '../../../../assets/images/ajker-arban-1.png';


class Navbar extends Component{

    state = {
        items: [
        {id: 1, menu: 'বাংলাদেশ'},
        {id: 2, menu: 'রাজনীতি'},
        {id: 3, menu: 'অর্থনীতি'},
        {id: 4, menu: 'আন্তর্জাতিক'},
        {id: 5, menu: 'খেলা'},
        {id: 6, menu: 'বিনোদন'},
        {id: 7, menu: 'স্বাস্থ্য'},
        {id: 8, menu: 'শিক্ষাঙ্গন'},
        {id: 9, menu: 'আবহাওয়া'},
        {id: 10, menu: 'জীবনযাপন'},
        {id: 11, menu: 'সম্পাদকীয়'},
        {id: 12, menu: 'অন্যান্য'}
        ],
        showNavigation : false,
    }

    render(){
        const { items } = this.state;
        // Media breakpoints
        // const breakPoints = [
        //     {width: 1, itemsToShow : 1},
        //     {width: 768, itemsToShow : 2},
        //     {width: 1024, itemsToShow : 3},
        //     {width: 1440, itemsToShow : 4},
        //     {width: 1920, itemsToShow : 20}
        // ];



        return(
            <section className="header-section">
                <div className="header-content flex-container">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="menu-bar mobile-hide">
                        {/* <ul className="flex-container" breakPoints = {breakPoints}>
                            {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                        </ul> */}
                        <ul className="flex-container">
                            {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                        </ul>
                    </div>
                    <div className="menu-bar desktop-hide">
                        <div className="hamburger" onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {
                            this.state.showNavigation ?
                            <ul className="flex-container">
                                <div className="hamburger showBurger" onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>
                                    <span></span>
                                    <span></span>
                                </div>
                                {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                            </ul>
                            :null
                        }
                        <ul className="flex-container mobile-hide">
                            <li><a href="#">বাংলাদেশ</a></li>
                            <li><a href="#">রাজনীতি</a></li>
                            <li><a href="">অর্থনীতি</a></li>
                            <li><a href="#">আন্তর্জাতিক</a></li>
                            <li><a href="#">খেলা</a></li>
                            <li><a href="#">বিনোদন</a></li>
                            <li><a href="#">স্বাস্থ্য</a></li>
                            <li><a href="#">সম্পাদকীয়</a></li>
                            <li><a href="">আজকের এই দিনে</a></li>
                            <li><a href="">আইন ও মানবাধিকার</a></li>
                            <li><a href="">শিক্ষাঙ্গন</a></li>
                            <li><a href="">আবহাওয়া</a></li>
                            <li><a href="">জীবনযাপন</a></li>
                            <li><a href="">অর্থনীতি</a></li>
                            <li><a href="">অর্থনীতি</a></li>
                            <li><a href="">অর্থনীতি</a></li>
                            <li><a href="">অর্থনীতি</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Navbar;