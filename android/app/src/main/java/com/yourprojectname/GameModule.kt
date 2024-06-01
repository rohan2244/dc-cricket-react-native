package com.yourprojectname

import android.app.Activity
import com.example.dc_cricket.CricketGameActivity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class GameModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return NAME
    }

    companion object {
        const val NAME = "GameModule"
    }

    @ReactMethod
    fun startCricketGame() {
        val activity: Activity? = currentActivity
        if (activity != null) {
            CricketGameActivity.start(activity, "2", "Rohan");
//            promise.resolve(null);
        } else {
//            promise.reject("Activity not found", "No current activity found.");
        }
    }
}