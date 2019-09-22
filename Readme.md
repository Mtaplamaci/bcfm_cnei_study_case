## Cloud Native Engineer Intern Case Study
projedeki web uygulaması windows işletim sistemi üzerinde yapılıp, Dockerfile kullanarak docker imajı oluşturulması ve docker hu a push edilme ilemi Ubuntu 18.04.3 LTS işletim sisteminde gerçekleştirilmiştir.

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
docker push rtaplamaci/ramazan_taplamaci_node:0.2
```
push işlemim tamamlandı. Buna istinaden [buraya tıklayarak](https://cloud.docker.com/u/muhammed81/repository/docker/muhammed81/muhammed_taplamaci) Docker Hub'da bulunan imaja ulaşabilirsiniz. 
