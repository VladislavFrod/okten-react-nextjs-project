'use client';
import React, {useState, useEffect, FC} from 'react';
import './theme-toggle.css';

const ThemeToggle: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Початкова тема — темна

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full transition duration-300 ease-in-out">
            <img
                src={isDarkMode ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE4klEQVR4nO2da6hmUxjHf2fGcTuS5lIIoZGZyf3ycThJSrl8IkqJwTQRYsakcY1IpAYpUXL9MEkTpnwSc6IxaQwahBHmnHGaYdymTA7zaPEUveecefd+99rvevZez6/+X9/3Wc//ffdae61nrQWO4ziO4zhO+zkNeAwYB8aAC1IHlCP7A0uAjwHp0NbUweXEwcAK4PspjBDVaOogc2Af4Hpgx16MENXS1MG2nfOAzQWMEGAEmJE64DY/np4C9hQ0YzewMHXQbWUY+KagEaJamTroNjIALAf+LGnG58Bg6uDbxkHA6pJGiOrS1MG3jTnAhh7N2Kj/LCcSh03zgldUl7sT8Tiyh86786180A2Jw1zgswpmBN3pZsR7x/igohnh/eRYN6Q6oQN+paIZQe+5GXFYGcGMoGWR4iH3eam/IhkS1kGcChyio6IYZvzok4jVeTGSGUFrI8STNRdFNCPokdQNajL7Al9ENmRx6kY1mWWRzQg6O3Wjmsps4OcaDDk5dcOayt01mBF0TOqGNZEh4IeaDAnzYE5JbqzJjKBDywbjVFvj6KZ5nuBynFmjGUGnlowne56o2ZBQleKUmF4fq9mQq4sG48AZNZsR9JAnujh39cGQNSXiyZ51fTDk6+yzXJCZwK4+GBJ0dNGgcubEPpkRdFXqxjaBK/toyAupG9sE7u+jIWEW+YDUDc5pmbaILkndYOuM9NmQ11M32Dpb+mzIBHBU6kZbZrzPhgjweOpGW+bXBIb8rlsanCmYSGCIAI+6G1OzO5EhE8BJbspkimzsr0sjvrUt/ShLOuTTKR18lNiQXcACf3T9x9uJDREtrvApFeUZA4YI8Jz3J/9ymwEzRPWgP7rgYgNGyP90S+6mzDdggnTs1L2ZzJdwdxowQjq0Kuc+ZY0BA2QKPZ/r6KvOIusYQ+L5NIMBPehzrOppqycYSLzsRb/pljjLj7DjYVI5Vc+He4aGfmsg8dJF67RKxhLhIJ07dEmhM95tVT74AQMJl4KzxKsMrKeEgzsv67I5NsTZmuGvdFH4RT6ZoPgu7FC+AthUIMZTqn7Z+wYSLT38Y9bqr7XOEdk8rYEeLXFqXmWWGEiwVNAvwMvANRGOgZqpm5hW9PhDXRzrfPZtBhIrkRROvnsNeBi4FjgXOB04Tvug2WpcOBTnHOA6XVp+E/ipwveO6qMtCrcaSKQ0XCGHUbdGp1zWlYZrXI/PjcpyAw2Thio89mq52aDOLdLSUm3SwUAtDJc4VN/FP7kabltlvDRYYVt57cwt8SKUs7bU0ZFPx1kJy02lAQq5WURDj4lto24i0czmGwYaL8b0EgkJL4zrDSRBjOhd4EASE+Z+PjWQDEmsT4BZGCFsR/vOQFIkkb4ysDg2icMzfZPfDByBUWbpc1Qy0Qa95sk0Q5mMvlZrWxvBgI7F/zCQOImscBXgPcbLj6ZlUcumWbbqCmOjmaMHzDR9lvhZvaqjNQyXuJxYDCncPno+LWVQD/XfbiDR0kU7dQtEFtf5DWmnH+umHomo7dppm3nr7if76XrzegNGfAgszXWrw3SV4vdVvDG0rMa01tZP2O7CQuAG4FW9OCxmFeNbwO1aY9vId4nUzNCqwgt1QPC07qPfqMukO7TIeo92xKHK8kvgHd1Wfa8WQi/Qz3Icx3Ecx3HIib8BJ4BqsPgaC/EAAAAASUVORK5CYII=' :
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2Zy2oUQRSGP5IMjiFBFFtcqHtjXkFF3QhCFNGH0BBvG3EjrnSvT+DtQUyWwpgY8TJu3IluxAQvUUzLgX+gHGZGq7u6ugz9QcFQ03UufapPnzoNDQ0NdfMEeMoWINf478kbRxIjuYjsAtoRHWkBO6nAiS/ACpBFcCQDngGfgR0EZBuwLIOeezqzBCx6XJ9JRy6dFpmguApeAXtDK+BPHS8r0lG5M9GcGBb6Igmgn3aJrVuKTIq/DlA6BhwB7qo8eQ980O97wGFd47IH+CaZ0Zxw7+LuvrmjQMfJVMNGR866mKwQ0S3NDWBThlqavgTMAJMaM5rrbUu79jqJcUvGfQcuDNg6LvbfRWBDa26SCKd0d82JYx7rjsuZX8BJamYCeKM7a5HwZd5J5SarNs45KXPUdhrGOLAqGWepkccyYqGEjCuScZ8a6cqIgyVkHJKM1wHtYgp4NyL/WwHosq55W1eUaclYK2GHtyP9Veya5qcjO7JIYHoZy152RZmtYmsVfdgvU5xrkvGAGjkvI1aVSn2xNS8kw1J5bdjp7a0MsbLDlwWt7VZxEvTljIzZUNnxr5zQGitv5kiEO44z83/ZZuOKRK9ovE1CjDnO5Nr3V5WRpjRmNdd7JjblRJHSJigTOme4nHbe9qNGd8B2srZP9Ock0ynv44BTXUsZ6JGq2nUNayg81H/9BlvEPsU+6rrNh06g8rulhlweq/lQZcsmRt8sWt8pq9qZSTUUioTe94tV5jhjOrcTkP3Az8hN7BXgB7CPwByI/FmhLZ3JkNyHnqI0jqTGlonIUhVn7IaGBrz4DejQ596rineIAAAAAElFTkSuQmCC'}
                alt={isDarkMode ? "Dark Mode Icon" : "Light Mode Icon"}
                className="w-6 h-6"
            />
        </button>
    );
};

export default ThemeToggle;
