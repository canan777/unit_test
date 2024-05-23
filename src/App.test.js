// App.test.js:App bileşeninin testlerinin yazıldığı test dosyasıdır.
// Bir dosyanın test dosyası olduğunu anlamamız için dosya uzantısı
// ...test.js / ..test.jsx şeklinde olmalıdır.

//* Unit Test
//* Yazılımın en küçük parçası görevini doğru şekilde 
//* yerine getiriyor mu? Kontrolünü yapar.
//* Unit test ile react bileşenleri test ederiz.
//* Bu sayede proje içerisinde bir kod değişikliği 
//* olduğu zaman yaptığımız değişiklikleri githuba 
//* göndermeden önce her şeyin doğru çalıştığından emin olmalıyız.
//* Unit testin olayı da bizim bu kontrolü yapmamızı sağlamasıdır.

import { render, screen } from '@testing-library/react';
import App from './App';

// bir işlevi veya bileşeni test etmek için test fonksiyonu oluştururuz.
// test fonksiyonları iki parametre alır
// 1) string > testin açıklaması
// 2) fonksiyon > testin yapıldığı yer
test('ekrana react öğren linki basılır', () => {
  // a) test edilecek bileşen sanal ortamda ekrana basılır
  render(<App />);

  // b) test edilecek elementleri çağırma
  const linkEle = screen.getByText('React Öğren');

  // c) çağrılan elemandan beklentimizi belirtmek (testi yapmak)
  expect(linkEle).toBeInTheDocument();
});

test ('Buton tıklanma olayında renk ve yazı değiştirir', ()=>{
  // test edilecek bileşen ekrana basılır
  render(<App/>);

  // test edilecek butonu çağır
  const button = screen.getByRole('button', { name: 'Maviye Çevir' });

//1) butonun rengi kırmızıdır
expect(button).toHaveStyle({ background: 'red' });

//2) butonun içinde "Maviye Çevir" yazar
expect(button).toHaveTextContent('Maviye Çevir');

//3) butonun üzerine tıklanır
fireEvent.click(button);

//4) butonun rengi mavidir
expect(button).toHaveStyle({ background: 'aqua' });

//5) butonun içinde "Kırmızıya Çevir" yazar
expect(button).toHaveTextContent('Kırmızıya Çevir');
});
