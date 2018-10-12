# Mooveez

This is Movies and TV Shows App made with React Native.

## Libraries used



## Installation info

```
git clone https://github.com/AlenAusic/Mooveez.git
cd Mooveez
npm install
expo start
```

## Notes

This app is made with Expo and you should first install Expo app on your Android device before testing.

[Expo on Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

After installing Expo and running "expo start", you should see a QR code in your terminal.

Open Expo app on your device and click on "Scan QR Code", then scan one in terminal.

App will be boundled and should start in a few seconds.

## Other notes

I couldn't achieve nesting stackNavigator inside tabNavigator even after Google-ing it for more than two day. This is why I couldn't finish this project and the only thing missing is MoreInfo screen when some movie or show is clicked. I tried using other navigation libraries, but all of them are deprecated. Maybe I didn't pass navigation props properly from one screen to another. 

I would love **really** like some feedback on this if you have someone with React Native experience on your team.

"Movies" tab shows a list of popular/trending movies and changes it's content depending on search term that is entered. Search term length must be >= 3 to trigger the API call. The same goes for "Shows" tab.