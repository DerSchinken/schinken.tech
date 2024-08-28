FROM debian:latest
RUN apt update -y && apt upgrade -y
WORKDIR /var/
RUN mkdir -p /var/www/html
RUN apt install -y git
RUN git clone https://github.com/DerSchinken/schinken.tech.git /var/www/html/
RUN apt install -y apache2 certbot python3-certbot-apache
RUN certbot --apache --non-interactive --agree-tos -m der@schinken.tech --domain schinken.tech
EXPOSE 80
EXPOSE 443
CMD ["apache2ctl", "-D", "FOREGROUND"]
