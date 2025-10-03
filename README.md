# Cafee - Modern Kafe Web Sitesi

Bu proje, React ve Tailwind CSS kullanılarak geliştirilmiş modern ve responsive bir kafe web sitesidir. Tek sayfa (single-page) mimarisine sahip olup, kullanıcı dostu bir arayüz sunar.

## 🚀 Canlı Demo
[Buradan projeyi inceleyebilirsiniz](https://cafee.yasinatici.com/)


<img width="764" height="15654" alt="cafee yasinatici com_" src="https://github.com/user-attachments/assets/cc55fb5f-c8e9-48a8-8b60-9ae2c0f4555c" />


## ✨ Özellikler

- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu.
- **Modern Arayüz:** Tailwind CSS ile oluşturulmuş temiz ve şık tasarım.
- **Komponent Bazlı Yapı:** React komponentleri sayesinde yönetimi ve geliştirmesi kolay kod yapısı.
- **Tek Sayfa Navigasyonu:** Sayfa yenilenmeden bölümler arasında akıcı geçişler.
- **Dinamik Menü:** `JSON` dosyasından çekilen verilerle oluşturulan menü bölümü.
- **Etkileşimli Harita:** Google Maps entegrasyonu ile konum bilgisi.

## 🛠️ Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.
- **Tailwind CSS:** Hızlı ve modern tasarımlar için kullanılan bir CSS çatısı.
- **React Icons:** Projede kullanılan sosyal medya ve diğer ikonlar için.

## 🚀 Kurulum ve Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi klonlayın:**
    ```bash
    git clone https://github.com/kullanici-adiniz/cafee.git
    ```

2.  **Proje dizinine gidin:**
    ```bash
    cd cafee
    ```

3.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```
    Proje varsayılan olarak `http://localhost:5173` adresinde çalışacaktır. (Port numarası farklılık gösterebilir.)

## 📂 Proje Yapısı

```
cafee/
├── public/
│   └── ...
├── src/
│   ├── assets/         # Resimler ve diğer statik varlıklar
│   ├── components/     # React komponentleri (Navbar, Hero, Menu vb.)
│   ├── data/           # Menü gibi JSON verileri
│   ├── App.jsx         # Ana uygulama komponenti
│   └── index.css       # Global stiller ve Tailwind CSS importları
│   └── main.jsx        # Uygulamanın başlangıç noktası
├── .gitignore
├── index.html
├── package.json
└── README.md
```
