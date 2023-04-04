export const Socials = () => (
    <div style={{
        // border: "1px solid green",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }}>
        <div style={{
            // border: "1px solid red",
            width: "110px",
            position: "relative",
            top: 25,
            left: 60
            // height: "60px",
        }}>
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                <filter id='shadow' color-interpolation-filters="sRGB">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.5" />
                </filter>

                <g filter="url(#shadow)">
                    <path fill="white" transform="translate(100 100)">
                        <animate attributeName="d"
                            dur="20000ms"
                            repeatCount="indefinite"

                            values="M54.9,-50.3C68.4,-41.4,74.6,-20.7,73.7,-0.9C72.8,19,64.8,37.9,51.4,49.9C37.9,61.8,19,66.7,2.2,64.5C-14.6,62.3,-29.1,53,-40.4,41C-51.7,29.1,-59.7,14.6,-61.6,-1.9C-63.5,-18.3,-59.2,-36.6,-47.9,-45.5C-36.6,-54.4,-18.3,-53.8,1.2,-55C20.7,-56.2,41.4,-59.2,54.9,-50.3Z;
                            
                            M49.6,-44.9C65.7,-33.6,81,-16.8,81.9,1C82.9,18.7,69.5,37.4,53.5,51.1C37.4,64.8,18.7,73.5,0.1,73.4C-18.5,73.3,-37,64.4,-46.6,50.7C-56.2,37,-56.9,18.5,-55.6,1.3C-54.3,-15.9,-51.1,-31.9,-41.5,-43.2C-31.9,-54.5,-15.9,-61.1,0.4,-61.5C16.8,-61.9,33.6,-56.1,49.6,-44.9Z;

                            M58.4,-58.5C74.9,-41.9,87,-21,85.2,-1.7C83.5,17.5,68,35,51.5,49.7C35,64.4,17.5,76.3,-2,78.3C-21.4,80.3,-42.8,72.3,-54.2,57.6C-65.6,42.8,-67,21.4,-67.2,-0.2C-67.4,-21.9,-66.5,-43.8,-55.1,-60.3C-43.8,-76.8,-21.9,-88,-0.5,-87.6C21,-87.1,41.9,-75,58.4,-58.5Z;

                            M47.5,-49C60.7,-34.3,69.9,-17.1,68.8,-1.1C67.8,15,56.4,30,43.2,44.9C30,59.8,15,74.7,-2.8,77.5C-20.5,80.2,-41.1,70.9,-57.5,56C-74,41.1,-86.4,20.5,-83,3.3C-79.7,-13.8,-60.6,-27.7,-44.1,-42.4C-27.7,-57.1,-13.8,-72.7,1.7,-74.3C17.1,-76,34.3,-63.7,47.5,-49Z;

                            M56.6,-56.7C66.4,-46.8,62.5,-23.4,60.2,-2.4C57.8,18.7,57,37.4,47.2,52.6C37.4,67.8,18.7,79.6,-1.2,80.8C-21.1,82,-42.3,72.7,-55.8,57.5C-69.3,42.3,-75.1,21.1,-74.6,0.6C-74,-20,-67,-40,-53.5,-49.9C-40,-59.7,-20,-59.5,1.7,-61.2C23.4,-62.9,46.8,-66.6,56.6,-56.7Z;

                            M58.4,-56.9C69.9,-46.9,69.4,-23.4,65,-4.4C60.5,14.6,52.1,29.2,40.7,38.1C29.2,47.1,14.6,50.4,0,50.4C-14.5,50.4,-29,47,-42.6,38C-56.3,29,-69,14.5,-71.7,-2.7C-74.4,-20,-67.2,-40,-53.6,-50C-40,-60.1,-20,-60.2,1.7,-61.9C23.4,-63.7,46.9,-67,58.4,-56.9Z;

                            M51,-49.2C61.4,-40.5,62.1,-20.3,58.5,-3.7C54.8,12.9,46.8,25.9,36.4,39.4C25.9,53,12.9,67.2,-0.8,67.9C-14.5,68.7,-29,56.1,-38.3,42.5C-47.7,29,-52,14.5,-50.7,1.3C-49.4,-11.9,-42.6,-23.9,-33.2,-32.6C-23.9,-41.3,-11.9,-46.7,4.2,-50.9C20.3,-55.1,40.5,-57.9,51,-49.2Z;

                            M52.6,-48C69.2,-36,84.5,-18,84.2,-0.3C83.8,17.3,67.9,34.6,51.3,46.3C34.6,57.9,17.3,63.9,-2,65.8C-21.2,67.8,-42.5,65.8,-56.3,54.1C-70.1,42.5,-76.5,21.2,-75.7,0.8C-74.9,-19.7,-67,-39.3,-53.1,-51.4C-39.3,-63.4,-19.7,-67.8,-0.8,-67C18,-66.1,36,-60.1,52.6,-48Z;

                            M52.2,-50.5C62.3,-42,61.7,-21,59.7,-2C57.7,16.9,54.2,33.9,44.1,46.4C33.9,59,16.9,67.2,-1.9,69.1C-20.7,71,-41.5,66.6,-51.6,54C-61.8,41.5,-61.4,20.7,-58.4,3C-55.4,-14.7,-49.8,-29.4,-39.6,-37.9C-29.4,-46.4,-14.7,-48.6,3.1,-51.7C21,-54.8,42,-58.9,52.2,-50.5Z;

                            M47.2,-51.9C55.6,-38.7,53.3,-19.3,53.8,0.5C54.3,20.4,57.7,40.7,49.2,53C40.7,65.3,20.4,69.6,4.1,65.5C-12.2,61.3,-24.3,48.9,-36.7,36.6C-49.2,24.3,-61.9,12.2,-65.8,-3.9C-69.7,-19.9,-64.7,-39.8,-52.3,-53C-39.8,-66.2,-19.9,-72.7,-0.3,-72.4C19.3,-72.1,38.7,-65.1,47.2,-51.9Z;

                            

                            ">

                        </animate>
                    </path>

                </g>
                <image x="67" y="65" width="35%" href="./gmail.png" ></image>
            </svg>
        </div>
        <div style={{
            // border: "1px solid red",
            width: "110px",
            position: "relative",
            top: 60,
            left: 70
        }}>
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                <filter id='shadow' color-interpolation-filters="sRGB">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.5" />
                </filter>

                <g filter="url(#shadow)">
                    <path fill="white" transform="translate(100 100)">
                        <animate attributeName="d"
                            dur="20000ms"
                            repeatCount="indefinite"

                            values="M54.9,-50.3C68.4,-41.4,74.6,-20.7,73.7,-0.9C72.8,19,64.8,37.9,51.4,49.9C37.9,61.8,19,66.7,2.2,64.5C-14.6,62.3,-29.1,53,-40.4,41C-51.7,29.1,-59.7,14.6,-61.6,-1.9C-63.5,-18.3,-59.2,-36.6,-47.9,-45.5C-36.6,-54.4,-18.3,-53.8,1.2,-55C20.7,-56.2,41.4,-59.2,54.9,-50.3Z;
                            
                            

                            M58.4,-58.5C74.9,-41.9,87,-21,85.2,-1.7C83.5,17.5,68,35,51.5,49.7C35,64.4,17.5,76.3,-2,78.3C-21.4,80.3,-42.8,72.3,-54.2,57.6C-65.6,42.8,-67,21.4,-67.2,-0.2C-67.4,-21.9,-66.5,-43.8,-55.1,-60.3C-43.8,-76.8,-21.9,-88,-0.5,-87.6C21,-87.1,41.9,-75,58.4,-58.5Z;

                            M47.5,-49C60.7,-34.3,69.9,-17.1,68.8,-1.1C67.8,15,56.4,30,43.2,44.9C30,59.8,15,74.7,-2.8,77.5C-20.5,80.2,-41.1,70.9,-57.5,56C-74,41.1,-86.4,20.5,-83,3.3C-79.7,-13.8,-60.6,-27.7,-44.1,-42.4C-27.7,-57.1,-13.8,-72.7,1.7,-74.3C17.1,-76,34.3,-63.7,47.5,-49Z;

                            M56.6,-56.7C66.4,-46.8,62.5,-23.4,60.2,-2.4C57.8,18.7,57,37.4,47.2,52.6C37.4,67.8,18.7,79.6,-1.2,80.8C-21.1,82,-42.3,72.7,-55.8,57.5C-69.3,42.3,-75.1,21.1,-74.6,0.6C-74,-20,-67,-40,-53.5,-49.9C-40,-59.7,-20,-59.5,1.7,-61.2C23.4,-62.9,46.8,-66.6,56.6,-56.7Z;

                            M58.4,-56.9C69.9,-46.9,69.4,-23.4,65,-4.4C60.5,14.6,52.1,29.2,40.7,38.1C29.2,47.1,14.6,50.4,0,50.4C-14.5,50.4,-29,47,-42.6,38C-56.3,29,-69,14.5,-71.7,-2.7C-74.4,-20,-67.2,-40,-53.6,-50C-40,-60.1,-20,-60.2,1.7,-61.9C23.4,-63.7,46.9,-67,58.4,-56.9Z;

                            M51,-49.2C61.4,-40.5,62.1,-20.3,58.5,-3.7C54.8,12.9,46.8,25.9,36.4,39.4C25.9,53,12.9,67.2,-0.8,67.9C-14.5,68.7,-29,56.1,-38.3,42.5C-47.7,29,-52,14.5,-50.7,1.3C-49.4,-11.9,-42.6,-23.9,-33.2,-32.6C-23.9,-41.3,-11.9,-46.7,4.2,-50.9C20.3,-55.1,40.5,-57.9,51,-49.2Z;

                            M52.6,-48C69.2,-36,84.5,-18,84.2,-0.3C83.8,17.3,67.9,34.6,51.3,46.3C34.6,57.9,17.3,63.9,-2,65.8C-21.2,67.8,-42.5,65.8,-56.3,54.1C-70.1,42.5,-76.5,21.2,-75.7,0.8C-74.9,-19.7,-67,-39.3,-53.1,-51.4C-39.3,-63.4,-19.7,-67.8,-0.8,-67C18,-66.1,36,-60.1,52.6,-48Z;

                            M52.2,-50.5C62.3,-42,61.7,-21,59.7,-2C57.7,16.9,54.2,33.9,44.1,46.4C33.9,59,16.9,67.2,-1.9,69.1C-20.7,71,-41.5,66.6,-51.6,54C-61.8,41.5,-61.4,20.7,-58.4,3C-55.4,-14.7,-49.8,-29.4,-39.6,-37.9C-29.4,-46.4,-14.7,-48.6,3.1,-51.7C21,-54.8,42,-58.9,52.2,-50.5Z;

                            M47.2,-51.9C55.6,-38.7,53.3,-19.3,53.8,0.5C54.3,20.4,57.7,40.7,49.2,53C40.7,65.3,20.4,69.6,4.1,65.5C-12.2,61.3,-24.3,48.9,-36.7,36.6C-49.2,24.3,-61.9,12.2,-65.8,-3.9C-69.7,-19.9,-64.7,-39.8,-52.3,-53C-39.8,-66.2,-19.9,-72.7,-0.3,-72.4C19.3,-72.1,38.7,-65.1,47.2,-51.9Z;

                            M49.6,-44.9C65.7,-33.6,81,-16.8,81.9,1C82.9,18.7,69.5,37.4,53.5,51.1C37.4,64.8,18.7,73.5,0.1,73.4C-18.5,73.3,-37,64.4,-46.6,50.7C-56.2,37,-56.9,18.5,-55.6,1.3C-54.3,-15.9,-51.1,-31.9,-41.5,-43.2C-31.9,-54.5,-15.9,-61.1,0.4,-61.5C16.8,-61.9,33.6,-56.1,49.6,-44.9Z;

                            ">

                        </animate>
                    </path>

                </g>
                <image x="71" y="62" width="30%" href="./linkedin.png" ></image>
            </svg>
        </div>
        <div style={{
            // border: "1px solid red",
            width: "110px",
            position: "relative",
            top: 10,
            left: 80
        }}>
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                <filter id='shadow' color-interpolation-filters="sRGB">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.5" />
                </filter>

                <g filter="url(#shadow)">
                    <path fill="white" transform="translate(100 100)">
                        <animate attributeName="d"
                            dur="20000ms"
                            repeatCount="indefinite"

                            values="
                            M56.6,-56.7C66.4,-46.8,62.5,-23.4,60.2,-2.4C57.8,18.7,57,37.4,47.2,52.6C37.4,67.8,18.7,79.6,-1.2,80.8C-21.1,82,-42.3,72.7,-55.8,57.5C-69.3,42.3,-75.1,21.1,-74.6,0.6C-74,-20,-67,-40,-53.5,-49.9C-40,-59.7,-20,-59.5,1.7,-61.2C23.4,-62.9,46.8,-66.6,56.6,-56.7Z;

                            M58.4,-56.9C69.9,-46.9,69.4,-23.4,65,-4.4C60.5,14.6,52.1,29.2,40.7,38.1C29.2,47.1,14.6,50.4,0,50.4C-14.5,50.4,-29,47,-42.6,38C-56.3,29,-69,14.5,-71.7,-2.7C-74.4,-20,-67.2,-40,-53.6,-50C-40,-60.1,-20,-60.2,1.7,-61.9C23.4,-63.7,46.9,-67,58.4,-56.9Z;

                            M51,-49.2C61.4,-40.5,62.1,-20.3,58.5,-3.7C54.8,12.9,46.8,25.9,36.4,39.4C25.9,53,12.9,67.2,-0.8,67.9C-14.5,68.7,-29,56.1,-38.3,42.5C-47.7,29,-52,14.5,-50.7,1.3C-49.4,-11.9,-42.6,-23.9,-33.2,-32.6C-23.9,-41.3,-11.9,-46.7,4.2,-50.9C20.3,-55.1,40.5,-57.9,51,-49.2Z;

                            M52.6,-48C69.2,-36,84.5,-18,84.2,-0.3C83.8,17.3,67.9,34.6,51.3,46.3C34.6,57.9,17.3,63.9,-2,65.8C-21.2,67.8,-42.5,65.8,-56.3,54.1C-70.1,42.5,-76.5,21.2,-75.7,0.8C-74.9,-19.7,-67,-39.3,-53.1,-51.4C-39.3,-63.4,-19.7,-67.8,-0.8,-67C18,-66.1,36,-60.1,52.6,-48Z;

                            M52.2,-50.5C62.3,-42,61.7,-21,59.7,-2C57.7,16.9,54.2,33.9,44.1,46.4C33.9,59,16.9,67.2,-1.9,69.1C-20.7,71,-41.5,66.6,-51.6,54C-61.8,41.5,-61.4,20.7,-58.4,3C-55.4,-14.7,-49.8,-29.4,-39.6,-37.9C-29.4,-46.4,-14.7,-48.6,3.1,-51.7C21,-54.8,42,-58.9,52.2,-50.5Z;

                            M47.2,-51.9C55.6,-38.7,53.3,-19.3,53.8,0.5C54.3,20.4,57.7,40.7,49.2,53C40.7,65.3,20.4,69.6,4.1,65.5C-12.2,61.3,-24.3,48.9,-36.7,36.6C-49.2,24.3,-61.9,12.2,-65.8,-3.9C-69.7,-19.9,-64.7,-39.8,-52.3,-53C-39.8,-66.2,-19.9,-72.7,-0.3,-72.4C19.3,-72.1,38.7,-65.1,47.2,-51.9Z;
                            
                            
                            M54.9,-50.3C68.4,-41.4,74.6,-20.7,73.7,-0.9C72.8,19,64.8,37.9,51.4,49.9C37.9,61.8,19,66.7,2.2,64.5C-14.6,62.3,-29.1,53,-40.4,41C-51.7,29.1,-59.7,14.6,-61.6,-1.9C-63.5,-18.3,-59.2,-36.6,-47.9,-45.5C-36.6,-54.4,-18.3,-53.8,1.2,-55C20.7,-56.2,41.4,-59.2,54.9,-50.3Z;
                            
                            M49.6,-44.9C65.7,-33.6,81,-16.8,81.9,1C82.9,18.7,69.5,37.4,53.5,51.1C37.4,64.8,18.7,73.5,0.1,73.4C-18.5,73.3,-37,64.4,-46.6,50.7C-56.2,37,-56.9,18.5,-55.6,1.3C-54.3,-15.9,-51.1,-31.9,-41.5,-43.2C-31.9,-54.5,-15.9,-61.1,0.4,-61.5C16.8,-61.9,33.6,-56.1,49.6,-44.9Z;

                            M58.4,-58.5C74.9,-41.9,87,-21,85.2,-1.7C83.5,17.5,68,35,51.5,49.7C35,64.4,17.5,76.3,-2,78.3C-21.4,80.3,-42.8,72.3,-54.2,57.6C-65.6,42.8,-67,21.4,-67.2,-0.2C-67.4,-21.9,-66.5,-43.8,-55.1,-60.3C-43.8,-76.8,-21.9,-88,-0.5,-87.6C21,-87.1,41.9,-75,58.4,-58.5Z;

                            M47.5,-49C60.7,-34.3,69.9,-17.1,68.8,-1.1C67.8,15,56.4,30,43.2,44.9C30,59.8,15,74.7,-2.8,77.5C-20.5,80.2,-41.1,70.9,-57.5,56C-74,41.1,-86.4,20.5,-83,3.3C-79.7,-13.8,-60.6,-27.7,-44.1,-42.4C-27.7,-57.1,-13.8,-72.7,1.7,-74.3C17.1,-76,34.3,-63.7,47.5,-49Z;

                            

                            

                            ">

                        </animate>
                    </path>

                </g>
                <image x="61" y="54" width="40%" href="./github.png" ></image>
            </svg>
        </div>
        <div style={{
            // border: "1px solid red",
            width: "110px",
            position: "relative",
            top: -120,
            left: 70
        }}>
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                <filter id='shadow' color-interpolation-filters="sRGB">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.5" />
                </filter>

                <g filter="url(#shadow)">
                    <path fill="white" transform="translate(100 100)">
                        <animate attributeName="d"
                            dur="20000ms"
                            repeatCount="indefinite"

                            values="
                            
                            M56.6,-56.7C66.4,-46.8,62.5,-23.4,60.2,-2.4C57.8,18.7,57,37.4,47.2,52.6C37.4,67.8,18.7,79.6,-1.2,80.8C-21.1,82,-42.3,72.7,-55.8,57.5C-69.3,42.3,-75.1,21.1,-74.6,0.6C-74,-20,-67,-40,-53.5,-49.9C-40,-59.7,-20,-59.5,1.7,-61.2C23.4,-62.9,46.8,-66.6,56.6,-56.7Z;
                            
                            M54.9,-50.3C68.4,-41.4,74.6,-20.7,73.7,-0.9C72.8,19,64.8,37.9,51.4,49.9C37.9,61.8,19,66.7,2.2,64.5C-14.6,62.3,-29.1,53,-40.4,41C-51.7,29.1,-59.7,14.6,-61.6,-1.9C-63.5,-18.3,-59.2,-36.6,-47.9,-45.5C-36.6,-54.4,-18.3,-53.8,1.2,-55C20.7,-56.2,41.4,-59.2,54.9,-50.3Z;
                            
                            M49.6,-44.9C65.7,-33.6,81,-16.8,81.9,1C82.9,18.7,69.5,37.4,53.5,51.1C37.4,64.8,18.7,73.5,0.1,73.4C-18.5,73.3,-37,64.4,-46.6,50.7C-56.2,37,-56.9,18.5,-55.6,1.3C-54.3,-15.9,-51.1,-31.9,-41.5,-43.2C-31.9,-54.5,-15.9,-61.1,0.4,-61.5C16.8,-61.9,33.6,-56.1,49.6,-44.9Z;

                            M47.5,-49C60.7,-34.3,69.9,-17.1,68.8,-1.1C67.8,15,56.4,30,43.2,44.9C30,59.8,15,74.7,-2.8,77.5C-20.5,80.2,-41.1,70.9,-57.5,56C-74,41.1,-86.4,20.5,-83,3.3C-79.7,-13.8,-60.6,-27.7,-44.1,-42.4C-27.7,-57.1,-13.8,-72.7,1.7,-74.3C17.1,-76,34.3,-63.7,47.5,-49Z;

                            M58.4,-56.9C69.9,-46.9,69.4,-23.4,65,-4.4C60.5,14.6,52.1,29.2,40.7,38.1C29.2,47.1,14.6,50.4,0,50.4C-14.5,50.4,-29,47,-42.6,38C-56.3,29,-69,14.5,-71.7,-2.7C-74.4,-20,-67.2,-40,-53.6,-50C-40,-60.1,-20,-60.2,1.7,-61.9C23.4,-63.7,46.9,-67,58.4,-56.9Z;

                            M51,-49.2C61.4,-40.5,62.1,-20.3,58.5,-3.7C54.8,12.9,46.8,25.9,36.4,39.4C25.9,53,12.9,67.2,-0.8,67.9C-14.5,68.7,-29,56.1,-38.3,42.5C-47.7,29,-52,14.5,-50.7,1.3C-49.4,-11.9,-42.6,-23.9,-33.2,-32.6C-23.9,-41.3,-11.9,-46.7,4.2,-50.9C20.3,-55.1,40.5,-57.9,51,-49.2Z;

                            M52.6,-48C69.2,-36,84.5,-18,84.2,-0.3C83.8,17.3,67.9,34.6,51.3,46.3C34.6,57.9,17.3,63.9,-2,65.8C-21.2,67.8,-42.5,65.8,-56.3,54.1C-70.1,42.5,-76.5,21.2,-75.7,0.8C-74.9,-19.7,-67,-39.3,-53.1,-51.4C-39.3,-63.4,-19.7,-67.8,-0.8,-67C18,-66.1,36,-60.1,52.6,-48Z;

                            M52.2,-50.5C62.3,-42,61.7,-21,59.7,-2C57.7,16.9,54.2,33.9,44.1,46.4C33.9,59,16.9,67.2,-1.9,69.1C-20.7,71,-41.5,66.6,-51.6,54C-61.8,41.5,-61.4,20.7,-58.4,3C-55.4,-14.7,-49.8,-29.4,-39.6,-37.9C-29.4,-46.4,-14.7,-48.6,3.1,-51.7C21,-54.8,42,-58.9,52.2,-50.5Z;

                            M47.2,-51.9C55.6,-38.7,53.3,-19.3,53.8,0.5C54.3,20.4,57.7,40.7,49.2,53C40.7,65.3,20.4,69.6,4.1,65.5C-12.2,61.3,-24.3,48.9,-36.7,36.6C-49.2,24.3,-61.9,12.2,-65.8,-3.9C-69.7,-19.9,-64.7,-39.8,-52.3,-53C-39.8,-66.2,-19.9,-72.7,-0.3,-72.4C19.3,-72.1,38.7,-65.1,47.2,-51.9Z;

                            M58.4,-58.5C74.9,-41.9,87,-21,85.2,-1.7C83.5,17.5,68,35,51.5,49.7C35,64.4,17.5,76.3,-2,78.3C-21.4,80.3,-42.8,72.3,-54.2,57.6C-65.6,42.8,-67,21.4,-67.2,-0.2C-67.4,-21.9,-66.5,-43.8,-55.1,-60.3C-43.8,-76.8,-21.9,-88,-0.5,-87.6C21,-87.1,41.9,-75,58.4,-58.5Z;

                  

                           
                           

                            

                            ">

                        </animate>
                    </path>

                </g>
                <image x="61" y="64" width="35%" href="./scholar.png" ></image>
            </svg>
        </div>
    </div>
)