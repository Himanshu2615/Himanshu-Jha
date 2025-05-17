"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi" | "mr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.coding": "Creative Coding",
    "nav.concepts": "Concepts",
    "nav.contact": "Contact",
    "nav.theme": "Toggle Theme",
    "home.hello": "Hello, I'm",
    "home.title": "CREATIVE DEVELOPER",
    "home.download": "Download Resume",
    "home.things": "Things I Love",
    "home.getintouch": "Get in Touch",
    "footer.rights": "All rights reserved",
    "about.title": "About Me",
    "about.education": "Education",
    "about.skills": "Skills",
    "about.interests": "Interests",
    "about.journey": "My Journey",
    "about.location": "Location",
    "about.tech": "Tech Arsenal",
    "projects.title": "My Projects",
    "projects.all": "All Projects",
    "projects.web": "Web Development",
    "projects.ml": "Machine Learning",
    "projects.data": "Data Visualization",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "contact.title": "Get In Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent!",
    "contact.error": "Error sending message",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "coding.title": "Creative Coding",
    "concepts.title": "Concepts I Work With",
  },
  hi: {
    "nav.home": "होम",
    "nav.about": "मेरे बारे में",
    "nav.projects": "प्रोजेक्ट्स",
    "nav.coding": "क्रिएटिव कोडिंग",
    "nav.concepts": "कॉन्सेप्ट्स",
    "nav.contact": "संपर्क",
    "nav.theme": "थीम बदलें",
    "home.hello": "नमस्ते, मैं हूँ",
    "home.title": "क्रिएटिव डेवलपर",
    "home.download": "रिज्यूमे डाउनलोड करें",
    "home.things": "मुझे पसंद है",
    "home.getintouch": "संपर्क करें",
    "footer.rights": "सर्वाधिकार सुरक्षित",
    "about.title": "मेरे बारे में",
    "about.education": "शिक्षा",
    "about.skills": "कौशल",
    "about.interests": "रुचियाँ",
    "about.journey": "मेरी यात्रा",
    "about.location": "स्थान",
    "about.tech": "टेक आर्सेनल",
    "projects.title": "मेरे प्रोजेक्ट्स",
    "projects.all": "सभी प्रोजेक्ट्स",
    "projects.web": "वेब डेवलपमेंट",
    "projects.ml": "मशीन लर्निंग",
    "projects.data": "डेटा विज़ुअलाइज़ेशन",
    "projects.code": "कोड",
    "projects.demo": "डेमो",
    "contact.title": "संपर्क करें",
    "contact.name": "नाम",
    "contact.email": "ईमेल",
    "contact.message": "संदेश",
    "contact.send": "संदेश भेजें",
    "contact.sending": "भेज रहा है...",
    "contact.success": "संदेश भेज दिया गया!",
    "contact.error": "संदेश भेजने में त्रुटि",
    "contact.phone": "फोन",
    "contact.location": "स्थान",
    "coding.title": "क्रिएटिव कोडिंग",
    "concepts.title": "कॉन्सेप्ट्स जिन पर मैं काम करता हूँ",
  },
  mr: {
    "nav.home": "होम",
    "nav.about": "माझ्याबद्दल",
    "nav.projects": "प्रोजेक्ट्स",
    "nav.coding": "क्रिएटिव कोडिंग",
    "nav.concepts": "कॉन्सेप्ट्स",
    "nav.contact": "संपर्क",
    "nav.theme": "थीम बदला",
    "home.hello": "नमस्कार, मी आहे",
    "home.title": "क्रिएटिव डेव्हलपर",
    "home.download": "रिज्यूमे डाउनलोड करा",
    "home.things": "मला आवडते",
    "home.getintouch": "संपर्क साधा",
    "footer.rights": "सर्व हक्क राखीव",
    "about.title": "माझ्याबद्दल",
    "about.education": "शिक्षण",
    "about.skills": "कौशल्ये",
    "about.interests": "आवडी",
    "about.journey": "माझा प्रवास",
    "about.location": "स्थान",
    "about.tech": "टेक आर्सेनल",
    "projects.title": "माझे प्रोजेक्ट्स",
    "projects.all": "सर्व प्रोजेक्ट्स",
    "projects.web": "वेब डेव्हलपमेंट",
    "projects.ml": "मशीन लर्निंग",
    "projects.data": "डेटा व्हिज्युअलायझेशन",
    "projects.code": "कोड",
    "projects.demo": "डेमो",
    "contact.title": "संपर्क साधा",
    "contact.name": "नाव",
    "contact.email": "ईमेल",
    "contact.message": "संदेश",
    "contact.send": "संदेश पाठवा",
    "contact.sending": "पाठवत आहे...",
    "contact.success": "संदेश पाठवला!",
    "contact.error": "संदेश पाठवण्यात त्रुटी",
    "contact.phone": "फोन",
    "contact.location": "स्थान",
    "coding.title": "क्रिएटिव कोडिंग",
    "concepts.title": "कॉन्सेप्ट्स ज्यावर मी काम करतो",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "hi", "mr"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.setAttribute("lang", language)
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
