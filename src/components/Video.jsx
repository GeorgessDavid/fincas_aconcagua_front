export const Video = () => {
    return (
        <div className="video-container">
            <div className="video-text-background" />
            <div className="video-text">
                <h1>Fincas de Aconcagua</h1>
                <span>Viví la tranquilidad que merecés</span>
            </div>
            <video
                src="https://media.fincasdeaconcagua.com.ar/main_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    )
}