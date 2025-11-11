

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 relative overflow-hidden">
      {/* BG Image  */}
      <div className="absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Image
          src="/Textures/img-logotype-bg-footer.png"
          width={1800}
          height={1080}
          alt="bg blog"
        />
      </div>

      <div className="relative z-20">
        <div className="text-4xl text-black font-bold mt-16">-</div>
        <h1 className="text-4xl font-bold text-black">We Make Custom Apparel</h1>

        <p className="text-gray-500 mt-3">
          Order high quality hand-made design apparel by The Heavy Pedal
        </p>

        <Button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg">
          Get A Quote
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 w-full max-w-5xl text-left">
          <div>
            <h3 className="font-semibold mb-2 text-black">Heavy Pedal</h3>
            <ul className="space-y-1 text-gray-600">
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-black">Shop</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Sale</li>
              <li>Cycling kits</li>
              <li>Shirts</li>
              <li>Hats</li>
              <li>Jackets & Hoodies</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-black">Support</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Terms & Conditions</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Warranty</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-black">
              Accepted Methods of Payment
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["visa", "mastercard", "amex", "paypal", "bitcoin"].map(
                (card) => (
                  <img
                    key={card}
                    src={`https://upload.wikimedia.org/wikipedia/commons/${
                      card === "visa"
                        ? "4/41/Visa_Logo.png"
                        : card === "mastercard"
                        ? "2/2a/Mastercard-logo.svg"
                        : card === "amex"
                        ? "3/30/American_Express_logo_%282018%29.svg"
                        : card === "paypal"
                        ? "b/b5/PayPal.svg"
                        : "4/46/Bitcoin.svg"
                    }`}
                    alt={card}
                    className="h-6 w-auto"
                  />
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="mt-16 w-full max-w-lg text-left">
            <h3 className="font-semibold mb-3 text-black">
              Subscribe to Our Newsletter
            </h3>
            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0 bg-transparent px-4"
              />
              <Button className="rounded-full bg-black hover:bg-gray-800 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10">
            <h3 className="font-semibold mb-3 text-black">
              Stay In Touch With Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="bg-black text-white p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 flex justify-center items-center -z-10"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Heavy_Pedal_logo.png"
            alt="background logo"
            className="max-w-[80%] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
