export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="container grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4 max-sm:w-[80vw]">Carwow</h4>
            <p>Helping you find the best car deals since 2010.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Buy</h4>
            <ul>
              <li><a href="#">New cars</a></li>
              <li><a href="#">Used cars</a></li>
              <li><a href="#">Electric cars</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sell</h4>
            <ul>
              <li><a href="#">Value my car</a></li>
              <li><a href="#">Sell your car</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Carwow Clone. All rights reserved.
        </div>
      </footer>
    );
  }
  