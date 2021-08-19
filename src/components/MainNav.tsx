import React from "react";
import subSites, { getPath } from '../subSites';
import MainNavItem from "./MainNavItem";

export default function MainNav() {

    return (
        <div>
            <ul>
          {
            subSites.map((el, i) =>
                <MainNavItem 
                    key={i} 
                    icon={el.icon} 
                    title={el.title}
                    path={getPath(el.title)} />
            )
          }
                
            </ul>
        </div>
    )
}