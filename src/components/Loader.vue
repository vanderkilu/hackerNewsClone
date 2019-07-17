<template>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
</template>

<style scoped>
    .loader-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255,255,255,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader {
        border: 16px solid #f3f3f3; 
        border-top: 16px solid #4a148c; 
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
       
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>