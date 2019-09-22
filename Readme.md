## Cloud Native Engineer Intern Case Study
projedeki web uygulaması windows işletim sistemi üzerinde yapılıp, Dockerfile kullanarak docker imajı oluşturulması ve docker hub a push edilme işlemi Ubuntu 18.04.3 LTS işletim sisteminde gerçekleştirilmiştir.

* GÖREV 1: Herhangi bir dilde yazılmış örnek bir web uygulamasının Dockerfile kullanılarak docker imajı
haline getirilmesi.

Bu görev için öncelikli olarak Dosya sisteminde bir klasör oluşturdum. Ardından ilgili proje dosyalarını ilgili dizine taşıdım.

* Proje Dosyaları => server.js, canvas.html, package.json,

Ardından Dockerfile dosyasını oluşturdum ve içeriğini düzenledim.

Ardından istemediğim dosyaların Docker İmajına kopyalanmaması için .dockerignore dosyasını oluşturdum ve içeriğini düzenledim.

Ardından Docker image dosyasını oluşturmak için aşağıdaki komutu kullandım.

```bash
docker build -t mtaplamaci/muhammed_taplamaci:0.1 .
```


* GÖREV 2: Docker hub üzerinden bir hesap açılarak dockerize edilen imajın açılan hesaba
isim_soyisim:0.1* şeklinde psuh edilmesi.

 bir Docker Hub hesabı edindim ve terminal üzerinden giriş işlmelerimi tamamladım ardından imajı Docker Hub'a push edebilmek için aşağıdaki komutu kullandım.

```bash
docker push mtaplamaci/muhammed_taplamaci:0.1
```
push işlemim tamamlandı. Buna istinaden [buraya tıklayarak](https://cloud.docker.com/u/muhammed81/repository/docker/muhammed81/muhammed_taplamaci) Docker Hub'da bulunan imaja ulaşabilirsiniz. 

* GÖREV 3: İlgili imajı docker hub üzerinden çekerek, herhangi bir ortamda çalışıtırılıp browser üzerinden
çalıştığının gösterilmesi. Local ortamlarınız kullanılabilinir veya herhangi bir cloud provide
kullanabilirsiniz.

Bu görev için ise öncelikli olarak hali hazırda bilgisayarımda bulunan imajı aşağıdaki komutu kullanarak sildim.

```bash
docker rmi mtaplamaci/muhammed_taplamaci:0.1
```
Ardından Docker Hub'da bulunan imajı pull etmek için aşağıdaki kod bloğunu kullandım.
```bash
docker pull rtaplamaci/ramazan_taplamaci_node:0.2
```
Bilgisayarıma inen imajı çalıştırmak için ise Docker CLI'de aşağıdaki komutu kullandım.
```bash
docker run --name muhammed_taplamaci -p 8080:8080  -e PORT=8080 -d mtaplamaci/muhammed_taplamaci:0.1
```
Ardından browserımda http://localhost:8080/ adresinden hali hazırda hazırlamış olduğum html çıktıyı görüntüledim.
Eş zamanlı çizim uygulaması olduğu için iki farklı tarayıcıdan ya da aynı tarayıcıda  iki sekmede açarak görmek gerekir.
